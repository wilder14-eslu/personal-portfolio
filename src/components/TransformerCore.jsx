import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const nodesData = [
  // Encoder Block (Left)
  { id: 'enc_in', text: 'Input Embedding', desc: 'Positional Encoding', y: -3.5, x: -3.5, color: '#3b82f6' },
  { id: 'enc_mha', text: 'Multi-Head Attention', desc: 'Self-Attention', y: -1.0, x: -3.5, color: '#8b5cf6' },
  { id: 'enc_ffn', text: 'Feed Forward', desc: 'Dense Layers', y: 1.5, x: -3.5, color: '#a855f7' },
  { id: 'enc_out', text: 'Encoder Context', desc: 'Memory vectors', y: 4.0, x: -3.5, color: '#c084fc' },

  // Decoder Block (Right)
  { id: 'dec_in', text: 'Output Embedding', desc: 'Shifted Right', y: -3.5, x: 3.5, color: '#f59e0b' },
  { id: 'dec_mmha', text: 'Masked Attention', desc: 'Causal Masking', y: -1.0, x: 3.5, color: '#ef4444' },
  { id: 'dec_cross', text: 'Cross Attention', desc: 'Focus on Encoder', y: 1.5, x: 3.5, color: '#ec4899' },
  { id: 'dec_ffn', text: 'Feed Forward', desc: 'Dense Layers', y: 4.0, x: 3.5, color: '#d946ef' },
  
  // Output
  { id: 'final', text: 'Softmax Probabilities', desc: 'Next Word', y: 6.5, x: 0, color: '#10b981' }
];

const edgesData = [
  ['enc_in', 'enc_mha'],
  ['enc_mha', 'enc_ffn'],
  ['enc_ffn', 'enc_out'],
  ['enc_out', 'dec_cross'], // Cross attention context
  ['dec_in', 'dec_mmha'],
  ['dec_mmha', 'dec_cross'],
  ['dec_cross', 'dec_ffn'],
  ['dec_ffn', 'final']
];

const Node = ({ node }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.y = node.y + Math.sin(clock.elapsedTime * 2 + node.x) * 0.1;
  });
  return (
    <group position={[node.x, node.y, 0]} ref={ref}>
      <Sphere args={[0.25, 32, 32]}>
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.6} />
      </Sphere>
      <Html position={[0.4, 0, 0]} center style={{ pointerEvents: 'none' }}>
        <div className="flex flex-col items-start min-w-[170px] ml-3">
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

const Edge = ({ startNode, endNode }) => {
  const points = useMemo(() => {
    const pts = [];
    const numPoints = 20;
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = THREE.MathUtils.lerp(startNode.x, endNode.x, t);
      const y = THREE.MathUtils.lerp(startNode.y, endNode.y, t);
      const isCross = startNode.x !== endNode.x;
      // Add z-curve to the cross attention so it leaps through space
      const z = isCross ? Math.sin(t * Math.PI) * 2.5 : 0; 
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, [startNode, endNode]);

  return (
    <Line points={points} color="#cbd5e1" lineWidth={1.5} opacity={0.5} transparent />
  );
};

const DataParticle = ({ startNode, endNode, delay, speed }) => {
  const meshRef = useRef();
  const isCross = startNode.x !== endNode.x;
  
  useFrame(({ clock }) => {
    const t = ((clock.elapsedTime * speed) + delay) % 1;
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(startNode.x, endNode.x, t);
      meshRef.current.position.y = THREE.MathUtils.lerp(startNode.y, endNode.y, t);
      meshRef.current.position.z = isCross ? Math.sin(t * Math.PI) * 2.5 : 0;
      
      const scale = Math.sin(t * Math.PI) * 1.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.08, 16, 16]}>
      <meshBasicMaterial color={endNode.color} transparent opacity={0.8} />
    </Sphere>
  );
};

const TransformerArchitecture = () => {
  const particles = useMemo(() => {
    const p = [];
    edgesData.forEach(([startId, endId]) => {
      const startNode = nodesData.find(n => n.id === startId);
      const endNode = nodesData.find(n => n.id === endId);
      // Determine particle count based on edge
      const count = startId === 'enc_out' ? 5 : 3;
      for(let i=0; i<count; i++) {
        p.push({
          id: `${startId}-${endId}-${i}`,
          startNode,
          endNode,
          delay: i * (1/count),
          speed: 0.3 + Math.random() * 0.2
        });
      }
    });
    return p;
  }, []);

  return (
    <group position={[0, -1.5, 0]} rotation={[0.1, 0, 0]}>
      {edgesData.map(([startId, endId]) => (
        <Edge 
          key={`${startId}-${endId}`} 
          startNode={nodesData.find(n => n.id === startId)} 
          endNode={nodesData.find(n => n.id === endId)} 
        />
      ))}
      {nodesData.map(node => (
        <Node key={node.id} node={node} />
      ))}
      {particles.map(p => (
        <DataParticle key={p.id} {...p} />
      ))}
    </group>
  );
};

const TransformerCore = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      {/* Tooltip for Recruiters */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 group z-10">
        <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-600 cursor-help shadow-sm transition-colors hover:bg-blue-200">
          <span className="font-poppins font-bold text-sm">i</span>
        </div>
        <div className="absolute top-10 right-0 w-64 p-4 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
          <p className="text-[12px] text-gray-600 font-poppins leading-relaxed">
            <span className="text-blue-600 font-bold block mb-1">For Recruiters & Tech Leads:</span> 
            This interactive 3D component is a custom-coded representation of a <strong>Transformer Neural Network</strong> (Encoder-Decoder architecture). It demonstrates advanced skills in React, Three.js, and ML architectural visualization.
          </p>
        </div>
      </div>

      <Canvas camera={{ position: [0, 1.5, 15], fov: 55 }}>
        <color attach="background" args={['#fafcff']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <TransformerArchitecture />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.8} 
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>
    </div>
  );
};

export default TransformerCore;
