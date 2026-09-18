import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const pipelineNodes = [
  { id: 'problem', text: 'BUSINESS PROBLEM', desc: 'Requirement Analysis', y: 3.5, color: '#FF9900' },
  { id: 'data', text: 'DATA ENGINEERING', desc: 'SQL · Python · ETL', y: 2.0, color: '#3776AB' },
  { id: 'stats', text: 'STATISTICAL MODELING', desc: 'EDA · Hypothesis Testing', y: 0.5, color: '#4CAF50' },
  { id: 'ml', text: 'MACHINE LEARNING', desc: 'Predictive Models · LLMs', y: -1.0, color: '#F7931E' },
  { id: 'mlops', text: 'MLOps', desc: 'FastAPI · Docker · CI/CD', y: -2.5, color: '#2496ED' },
  { id: 'impact', text: 'PRODUCTION IMPACT', desc: 'Actionable Solutions', y: -4.0, color: '#FF007F' }
];

const AnimatedPipelineNode = ({ node }) => {
  const groupRef = useRef();
  const textRef = useRef();
  
  const [startPos] = useState(() => new THREE.Vector3(
    (Math.random() - 0.5) * 25,
    (Math.random() - 0.5) * 25,
    (Math.random() - 0.5) * 25
  ));
  
  const targetPos = new THREE.Vector3(0, node.y, 0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // 0 to 2: chaos wiggle
    // 2 to 12: slow ease to target
    let progress = Math.max(0, Math.min(1, (t - 2) / 10));
    const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
    
    if (groupRef.current) {
      // Add wiggle during chaos, reducing as it reaches order
      const wiggle = (1 - progress) * 0.8;
      const wx = Math.sin(t * 2 + node.y) * wiggle;
      const wy = Math.cos(t * 3 + node.y) * wiggle;
      const wz = Math.sin(t * 1.5 + node.y) * wiggle;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(startPos.x, targetPos.x, ease) + wx;
      groupRef.current.position.y = THREE.MathUtils.lerp(startPos.y, targetPos.y, ease) + wy;
      groupRef.current.position.z = THREE.MathUtils.lerp(startPos.z, targetPos.z, ease) + wz;
    }
    
    if (textRef.current) {
      // Fade text in precisely when the node settles (t=11 to t=13)
      textRef.current.style.opacity = Math.max(0, Math.min(1, (t - 11) / 2));
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.18, 32, 32]}>
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.3} />
      </Sphere>
      <Html position={[0.4, 0, 0]} center style={{ pointerEvents: 'none' }}>
        <div ref={textRef} className="flex flex-col items-start min-w-[200px] ml-2 opacity-0 transition-opacity duration-500">
          <div className="font-poppins font-bold text-gray-800 text-[11px] sm:text-xs bg-white/95 backdrop-blur-sm px-3 py-1 rounded shadow-md border-l-4" style={{ borderColor: node.color }}>
            {node.text}
          </div>
          <div className="font-poppins text-[10px] sm:text-[11px] text-gray-500 mt-1 ml-1 bg-white/80 px-2 py-0.5 rounded shadow-sm">
            {node.desc}
          </div>
        </div>
      </Html>
    </group>
  );
};

const NoiseParticles = () => {
  const meshRef = useRef();
  
  const particles = useMemo(() => {
    const pts = [];
    for(let i = 0; i < 200; i++) {
      // Each noise particle is destined to be absorbed by a specific pipeline node
      const targetNode = pipelineNodes[i % pipelineNodes.length];
      pts.push({
        start: new THREE.Vector3(
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 35
        ),
        targetNode: targetNode
      });
    }
    return pts;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    let progress = Math.max(0, Math.min(1, (t - 2) / 10));
    const ease = 1 - Math.pow(1 - progress, 3);
    
    // As they get close to the target, they shrink and disappear
    const scale = Math.max(0, 1 - progress * 1.1); 
    
    particles.forEach((pt, i) => {
      const wiggle = (1 - progress) * 1.5;
      const wx = Math.sin(t * 3 + i) * wiggle;
      const wy = Math.cos(t * 2 + i) * wiggle;
      const wz = Math.sin(t * 4 + i) * wiggle;
      
      dummy.position.x = THREE.MathUtils.lerp(pt.start.x, 0, ease) + wx;
      dummy.position.y = THREE.MathUtils.lerp(pt.start.y, pt.targetNode.y, ease) + wy;
      dummy.position.z = THREE.MathUtils.lerp(pt.start.z, 0, ease) + wz;
      
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, particles.length]}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshBasicMaterial color="#94a3b8" transparent opacity={0.5} />
    </instancedMesh>
  );
};

const Backbone = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Line grows as order is established (t=8 to t=12)
    const progress = Math.max(0, Math.min(1, (t - 8) / 4));
    if (meshRef.current) {
      meshRef.current.scale.y = progress;
    }
  });

  return (
    <group position={[0, -0.25, 0]}>
      <mesh ref={meshRef} scale={[1, 0, 1]}>
        {/* Total height from 3.5 to -4.0 is 7.5. The group centers it at -0.25 */}
        <cylinderGeometry args={[0.02, 0.02, 7.5, 8]} />
        <meshBasicMaterial color="#cbd5e1" />
      </mesh>
    </group>
  );
};

const PipelineStructure = () => {
  return (
    <group rotation={[0.1, -0.3, 0]}>
      <Backbone />
      {pipelineNodes.map((node) => (
        <AnimatedPipelineNode key={node.id} node={node} />
      ))}
      <NoiseParticles />
    </group>
  );
};

const FissionCore = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 10.5], fov: 60 }}>
        <color attach="background" args={['#fafcff']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PipelineStructure />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.8} 
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default FissionCore;
