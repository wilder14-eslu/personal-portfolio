import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Hypercube = () => {
  const lineRef = useRef();
  const pointsRef = useRef();
  
  const { vertices, edges } = useMemo(() => {
    let v = [];
    // Generate 16 vertices for a 4D hypercube (Tesseract)
    for (let i = 0; i < 16; i++) {
      v.push([
        (i & 1) ? 1 : -1,
        (i & 2) ? 1 : -1,
        (i & 4) ? 1 : -1,
        (i & 8) ? 1 : -1
      ]);
    }
    
    let e = [];
    // Generate edges connecting vertices that differ by exactly 1 bit
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        const diff = i ^ j;
        if ([1, 2, 4, 8].includes(diff)) {
          e.push([i, j]);
        }
      }
    }
    return { vertices: v, edges: e };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.3;
    const angleXY = t;
    const angleZW = t * 1.5;
    
    const projected = vertices.map(v => {
      let [x, y, z, w] = v;
      
      // 4D Rotation in XY plane
      let nx = x * Math.cos(angleXY) - y * Math.sin(angleXY);
      let ny = x * Math.sin(angleXY) + y * Math.cos(angleXY);
      x = nx; y = ny;

      // 4D Rotation in ZW plane
      let nz = z * Math.cos(angleZW) - w * Math.sin(angleZW);
      let nw = z * Math.sin(angleZW) + w * Math.cos(angleZW);
      z = nz; w = nw;

      // Projection from 4D to 3D
      const distance = 2.5;
      const w_proj = 1 / (distance - w * 0.4);
      return new THREE.Vector3(x * w_proj, y * w_proj, z * w_proj).multiplyScalar(1.5);
    });

    // Update Point Cloud
    if (pointsRef.current) {
      const positions = new Float32Array(16 * 3);
      projected.forEach((p, i) => {
        positions[i*3] = p.x;
        positions[i*3+1] = p.y;
        positions[i*3+2] = p.z;
      });
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }

    // Update Lines
    if (lineRef.current) {
      const linePositions = new Float32Array(edges.length * 2 * 3);
      edges.forEach((edge, i) => {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];
        linePositions[i*6] = p1.x; linePositions[i*6+1] = p1.y; linePositions[i*6+2] = p1.z;
        linePositions[i*6+3] = p2.x; linePositions[i*6+4] = p2.y; linePositions[i*6+5] = p2.z;
      });
      lineRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    }
  });

  return (
    <group>
      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00b4d8" transparent opacity={0.5} linewidth={1} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial color="#ff006e" size={0.15} sizeAttenuation={true} />
      </points>
    </group>
  );
};

const Math4D = () => {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-50/40 to-cyan-50/20 rounded-3xl border border-blue-100 overflow-hidden shadow-inner relative group">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
         <ambientLight intensity={1} />
         <Hypercube />
         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="absolute bottom-6 bg-white/80 backdrop-blur-md px-5 py-2 rounded-2xl shadow-sm border border-blue-200 pointer-events-none transition-transform group-hover:scale-105">
         <p className="text-sm font-poppins text-gray-800 text-center font-bold">
           Mathematical Foundation <br/>
           <span className="text-[11px] text-gray-500 font-medium">Interactive 4D Hypercube Algorithm (Tesseract)</span>
         </p>
      </div>
    </div>
  );
};

export default Math4D;
