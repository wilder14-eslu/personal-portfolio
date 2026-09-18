import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ChaosToStructure = () => {
  const meshRef = useRef();
  
  const points = useMemo(() => {
    const pts = [];
    const size = 18; // 18x18 = 324 points
    const spacing = 0.6;
    
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // Target shape: A smooth mathematical wave (Ripple)
        const x = (i - size / 2) * spacing;
        const z = (j - size / 2) * spacing;
        const dist = Math.sqrt(x * x + z * z);
        const y = Math.sin(dist * 1.2) * 1.5;
        
        // Chaotic start (high entropy)
        const startX = (Math.random() - 0.5) * 25;
        const startY = (Math.random() - 0.5) * 25;
        const startZ = (Math.random() - 0.5) * 25;
        
        // Color based on distance from center (looks amazing when structured)
        const color = new THREE.Color().setHSL(0.55 + dist * 0.05, 0.8, 0.5); // Cyan to blue to purple
        
        pts.push({
          start: new THREE.Vector3(startX, startY, startZ),
          target: new THREE.Vector3(x, y, z),
          color: color,
        });
      }
    }
    return pts;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (meshRef.current) {
      points.forEach((pt, i) => {
        meshRef.current.setColorAt(i, pt.color);
      });
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [points]);

  useFrame((state) => {
    const t = state.clock.elapsedTime % 24; // 24 second full loop
    
    // Animation phases:
    // 0 - 2s: Hold in Chaos
    // 2 - 12s: Slow transition (10 seconds) to Structure
    // 12 - 18s: Hold Structure
    // 18 - 24s: Explode back to Chaos

    let progress = 0;
    if (t >= 2 && t <= 12) {
      progress = (t - 2) / 10;
    } else if (t > 12 && t <= 18) {
      progress = 1;
    } else if (t > 18) {
      progress = 1 - ((t - 18) / 6);
    }
    
    // Smooth easing function (Cubic in-out)
    const ease = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    points.forEach((pt, i) => {
      // Add a slight continuous floating wiggle regardless of state
      const wiggleX = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.2;
      const wiggleY = Math.cos(state.clock.elapsedTime * 0.4 + i) * 0.2;
      const wiggleZ = Math.sin(state.clock.elapsedTime * 0.6 + i) * 0.2;
      
      dummy.position.x = THREE.MathUtils.lerp(pt.start.x, pt.target.x, ease) + wiggleX;
      dummy.position.y = THREE.MathUtils.lerp(pt.start.y, pt.target.y, ease) + wiggleY;
      dummy.position.z = THREE.MathUtils.lerp(pt.start.z, pt.target.z, ease) + wiggleZ;
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group rotation={[0.2, 0, 0]}>
      <instancedMesh ref={meshRef} args={[null, null, points.length]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial />
      </instancedMesh>
    </group>
  )
}

const FissionCore = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 4, 12], fov: 60 }}>
        <color attach="background" args={['#fafcff']} />
        <ambientLight intensity={1.0} />
        <ChaosToStructure />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.0} 
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default FissionCore;
