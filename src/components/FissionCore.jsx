import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 250 }) => {
  const pointsRef = useRef();
  const linesRef = useRef();
  const groupRef = useRef();

  // Create random positions, velocities, and base positions
  const [positions, velocities, basePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;

      vel[i * 3] = 0;
      vel[i * 3 + 1] = 0;
      vel[i * 3 + 2] = 0;
    }
    return [pos, vel, base];
  }, [count]);

  const maxDistance = 2.0;
  const maxLines = count * 30; // Pre-allocate safe amount for lines
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state) => {
    // Map pointer to 3D space approx
    const mouseX = state.pointer.x * 7;
    const mouseY = state.pointer.y * 7;

    // Update particle positions
    for (let i = 0; i < count; i++) {
      // 1. Pull back to base position
      velocities[i * 3] += (basePositions[i * 3] - positions[i * 3]) * 0.01;
      velocities[i * 3 + 1] += (basePositions[i * 3 + 1] - positions[i * 3 + 1]) * 0.01;
      velocities[i * 3 + 2] += (basePositions[i * 3 + 2] - positions[i * 3 + 2]) * 0.01;

      // 2. Mouse Repulsion
      const dxMouse = positions[i * 3] - mouseX;
      const dyMouse = positions[i * 3 + 1] - mouseY;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      
      if (distMouse < 2.5) {
        const force = (2.5 - distMouse) / 2.5;
        velocities[i * 3] += (dxMouse / distMouse) * force * 0.03;
        velocities[i * 3 + 1] += (dyMouse / distMouse) * force * 0.03;
      }

      // 3. Small random wiggle
      velocities[i * 3] += (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] += (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] += (Math.random() - 0.5) * 0.005;

      // 4. Apply friction
      velocities[i * 3] *= 0.92;
      velocities[i * 3 + 1] *= 0.92;
      velocities[i * 3 + 2] *= 0.92;

      // 5. Update position
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];
    }
    
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Calculate dynamic synapses (lines between close nodes)
    let lineIndex = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance && lineIndex < maxLines) {
          linePositions[lineIndex * 6] = positions[i * 3];
          linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
          linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2];
          linePositions[lineIndex * 6 + 3] = positions[j * 3];
          linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
          linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];
          lineIndex++;
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, lineIndex * 2);
    }
    
    if (groupRef.current) {
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#0077b6" size={0.15} sizeAttenuation transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={maxLines * 2} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#00b4d8" transparent opacity={0.3} linewidth={1} />
      </lineSegments>
    </group>
  );
};

const FissionCore = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 65 }}>
        <color attach="background" args={['#fafcff']} />
        <ambientLight intensity={1.0} />
        <ParticleNetwork count={300} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.0} />
      </Canvas>
    </div>
  );
};

export default FissionCore;
