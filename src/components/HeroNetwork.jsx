import React, { useRef, useEffect, useState } from 'react';

const HeroNetwork = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Configuration for the "Out of this Planet" AI Globe
    const numNodes = window.innerWidth < 768 ? 120 : 250;
    const sphereRadius = window.innerWidth < 768 ? 120 : 160;
    const connectionDistance = 65;
    
    let nodes = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let time = 0;
    
    // Helper: 3D Rotation
    const rotate3D = (x, y, z, pitch, yaw) => {
      // Pitch (around X axis)
      const cosX = Math.cos(pitch);
      const sinX = Math.sin(pitch);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      
      // Yaw (around Y axis)
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;
      
      return { x: x2, y: y1, z: z2 };
    };

    class AINode {
      constructor(index) {
        // Distribute points evenly on a sphere using Fibonacci lattice for a premium look
        const phi = Math.acos(1 - 2 * (index + 0.5) / numNodes);
        const theta = Math.PI * (1 + Math.sqrt(5)) * index;
        
        this.baseX = sphereRadius * Math.cos(theta) * Math.sin(phi);
        this.baseY = sphereRadius * Math.sin(theta) * Math.sin(phi);
        this.baseZ = sphereRadius * Math.cos(phi);
        
        // Random offset for organic "neural" feel
        this.offsetX = (Math.random() - 0.5) * 20;
        this.offsetY = (Math.random() - 0.5) * 20;
        this.offsetZ = (Math.random() - 0.5) * 20;
        
        this.radius = Math.random() * 1.5 + 1;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }
      
      get3DPosition(rotX, rotY, breathingScale) {
        const x = (this.baseX + this.offsetX) * breathingScale;
        const y = (this.baseY + this.offsetY) * breathingScale;
        const z = (this.baseZ + this.offsetZ) * breathingScale;
        
        return rotate3D(x, y, z, rotX, rotY);
      }
    }
    
    // Initialize Nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push(new AINode(i));
    }
    
    // Mouse tracking for interactive rotation
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left - width / 2;
      const my = e.clientY - rect.top - height / 2;
      
      // Map mouse position to rotation angles
      targetRotationY = (mx / width) * Math.PI; 
      targetRotationX = (my / height) * Math.PI;
    };
    
    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Render Loop
    let animationFrameId;
    const animate = () => {
      time += 0.01;
      
      // Smooth interpolation for rotation (easing)
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      
      // Auto-rotation added to mouse rotation
      const finalRotX = currentRotationX + Math.sin(time * 0.5) * 0.2;
      const finalRotY = currentRotationY + time * 0.3;
      
      // Breathing effect (sphere expands and contracts slightly)
      const breathingScale = 1 + Math.sin(time * 2) * 0.03;
      
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Project all nodes to 2D
      const projectedNodes = nodes.map(node => {
        const pos3D = node.get3DPosition(finalRotX, finalRotY, breathingScale);
        return {
          ...node,
          x3d: pos3D.x,
          y3d: pos3D.y,
          z3d: pos3D.z,
          screenX: centerX + pos3D.x,
          screenY: centerY + pos3D.y,
          scale: (pos3D.z + sphereRadius * 2) / (sphereRadius * 3) // Depth scale
        };
      });
      
      // Sort by Z for proper depth rendering (Painter's algorithm)
      projectedNodes.sort((a, b) => a.z3d - b.z3d);
      
      // Draw Connections (Synapses)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        const nodeA = projectedNodes[i];
        
        // Only draw connections for nodes somewhat facing the camera to save performance and look cleaner
        if (nodeA.z3d < -sphereRadius * 0.5) continue; 
        
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const nodeB = projectedNodes[j];
          
          const dx = nodeA.x3d - nodeB.x3d;
          const dy = nodeA.y3d - nodeB.y3d;
          const dz = nodeA.z3d - nodeB.z3d;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (nodeA.scale * 0.8);
            ctx.beginPath();
            ctx.moveTo(nodeA.screenX, nodeA.screenY);
            ctx.lineTo(nodeB.screenX, nodeB.screenY);
            
            // Dynamic gradient coloring based on Z depth
            const colorVal = Math.floor(180 + (nodeA.scale * 50)); // Cyan to Blue
            ctx.strokeStyle = `hsla(${colorVal}, 100%, 60%, ${alpha})`;
            ctx.stroke();
          }
        }
      }
      
      // Draw Nodes (Data Points)
      for (const node of projectedNodes) {
        const pulse = Math.sin(time * 10 * node.pulseSpeed + node.pulseOffset);
        const r = Math.max(0.1, node.radius * node.scale * (1 + pulse * 0.3));
        
        const alpha = Math.min(1, Math.max(0.1, node.scale * 1.5));
        const colorVal = Math.floor(190 + (node.scale * 40));
        
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${colorVal}, 100%, 60%, ${alpha})`;
        ctx.fill();
        
        // Glow for front-facing nodes
        if (node.z3d > 0) {
          ctx.shadowBlur = 10 * node.scale;
          ctx.shadowColor = `hsla(${colorVal}, 100%, 60%, ${alpha})`;
          ctx.fill(); // fill again to apply shadow
          ctx.shadowBlur = 0; // reset
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 w-full h-full z-10 cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* Floating HR Tooltip that appears on hover */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900/80 backdrop-blur-md rounded-full border border-cyan-500/30 text-xs font-poppins text-cyan-50 tracking-wider whitespace-nowrap transition-all duration-500 flex items-center gap-2 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        AI Data Core: Interactive Multi-dimensional Mapping
      </div>
    </div>
  );
};

export default HeroNetwork;
