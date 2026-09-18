import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
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

  // Map the 4th dimension to colors to make it truly visible
  const color1 = useMemo(() => new THREE.Color("#00f2fe"), []); // Neon Cyan
  const color2 = useMemo(() => new THREE.Color("#ff0844"), []); // Neon Pink

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.4;
    // Rotate in two independent 4D planes
    const angleXY = t * 1.2;
    const angleZW = t * 1.5;
    
    const projected = [];
    const pointColors = [];
    
    vertices.forEach(v => {
      let [x, y, z, w] = v;
      
      // 4D Rotation in XY plane
      let nx = x * Math.cos(angleXY) - y * Math.sin(angleXY);
      let ny = x * Math.sin(angleXY) + y * Math.cos(angleXY);
      x = nx; y = ny;

      // 4D Rotation in ZW plane
      let nz = z * Math.cos(angleZW) - w * Math.sin(angleZW);
      let nw = z * Math.sin(angleZW) + w * Math.cos(angleZW);
      z = nz; w = nw;

      // Stereographic Projection from 4D to 3D
      const distance = 3;
      const w_proj = 1 / (distance - w * 0.5);
      
      projected.push(new THREE.Vector3(x * w_proj, y * w_proj, z * w_proj).multiplyScalar(1.8));

      // Calculate color based on the hidden 4th dimension (W)
      const wNormalized = (w + 1.5) / 3.0; // Map roughly to 0-1 range
      const c = color1.clone().lerp(color2, wNormalized);
      pointColors.push(c);
    });

    // Update Point Cloud (Positions and Colors)
    if (pointsRef.current) {
      const positions = new Float32Array(16 * 3);
      const colors = new Float32Array(16 * 3);
      projected.forEach((p, i) => {
        positions[i*3] = p.x; positions[i*3+1] = p.y; positions[i*3+2] = p.z;
        colors[i*3] = pointColors[i].r; colors[i*3+1] = pointColors[i].g; colors[i*3+2] = pointColors[i].b;
      });
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }

    // Update Lines (Positions and Colors)
    if (lineRef.current) {
      const linePositions = new Float32Array(edges.length * 2 * 3);
      const lineColors = new Float32Array(edges.length * 2 * 3);
      edges.forEach((edge, i) => {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];
        const c1 = pointColors[edge[0]];
        const c2 = pointColors[edge[1]];
        
        linePositions[i*6] = p1.x; linePositions[i*6+1] = p1.y; linePositions[i*6+2] = p1.z;
        linePositions[i*6+3] = p2.x; linePositions[i*6+4] = p2.y; linePositions[i*6+5] = p2.z;
        
        // Edge colors blend between vertex colors
        lineColors[i*6] = c1.r; lineColors[i*6+1] = c1.g; lineColors[i*6+2] = c1.b;
        lineColors[i*6+3] = c2.r; lineColors[i*6+4] = c2.g; lineColors[i*6+5] = c2.b;
      });
      lineRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    }
  });

  return (
    <group>
      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors={true} transparent opacity={0.7} linewidth={2} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial vertexColors={true} size={0.2} sizeAttenuation={true} transparent opacity={1} />
      </points>
    </group>
  );
};

const Math4D = () => {
  return (
    <div className="w-full h-full min-h-[450px] flex items-center justify-center bg-[#030712] rounded-3xl border-2 border-blue-900/30 overflow-hidden shadow-2xl shadow-blue-900/20 relative group">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
         <color attach="background" args={['#030712']} />
         <ambientLight intensity={1} />
         <Stars radius={50} depth={50} count={3000} factor={3} saturation={0.5} fade speed={1.5} />
         <Hypercube />
         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
      
      {/* HUD Elements */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <h3 className="font-poppins font-bold text-white text-xl tracking-widest drop-shadow-lg">4D HYPERCUBE</h3>
        <p className="font-poppins text-cyan-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-1 drop-shadow-md">Tesseract Projection</p>
      </div>

      <div className="absolute bottom-6 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 pointer-events-none transition-all duration-500 group-hover:bg-black/60 group-hover:border-white/20">
         <p className="text-xs sm:text-sm font-poppins text-white text-center font-medium tracking-wide">
           Mathematical Foundation <br/>
           <span className="text-[10px] text-cyan-300/80 font-normal mt-1 block tracking-wider">DIMENSION 'W' MAPPED TO COLOR GRADIENT</span>
         </p>
      </div>
    </div>
  );
};

export default Math4D;
