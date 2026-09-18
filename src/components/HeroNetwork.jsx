import React, { useRef, useEffect } from 'react';

const HeroNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let particles = [];
    
    // Configuration for the 4D Neural Constellation
    const numParticles = window.innerWidth < 768 ? 50 : 90;
    const connectionDistance = 140;
    
    class Particle {
      constructor() {
        // Spatial dimensions (X, Y)
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        // Depth dimension (Z) - defines scale and parallax
        this.z = Math.random() * 2 - 1; 
        
        // 4th dimension (W) - defines chromatic shift and temporal pulsing
        this.w = Math.random() * 2 - 1; 
        
        // Random multidimensional velocities
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.vz = (Math.random() - 0.5) * 0.02;
        this.vw = (Math.random() - 0.5) * 0.03;
        
        this.baseRadius = Math.random() * 2.5 + 1;
      }
      
      update() {
        // Move through dimensions
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
        this.w += this.vw;
        
        // Multidimensional bounds checking (bounce)
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        if (this.z < -1 || this.z > 1) this.vz *= -1;
        if (this.w < -1 || this.w > 1) this.vw *= -1;
      }
      
      draw() {
        // 3D Projection (Scale based on Z)
        const scale = (this.z + 2) / 2; // Ranges from 0.5 to 1.5
        const r = this.baseRadius * scale;
        
        // 4D Projection (Color mapped to W axis)
        // Maps W (-1 to 1) to Hues 180 (Cyan) to 230 (Deep Blue)
        const hue = Math.floor(190 + (this.w + 1) * 25); 
        const opacity = 0.4 + (scale * 0.4); // Closer particles are more opaque
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${opacity})`;
        ctx.fill();
        
        // 4D Energy Glow
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.8)`;
      }
    }
    
    // Initialize Particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
    
    // Render Loop
    let animationFrameId;
    const animate = () => {
      // Clear with slight trailing effect for motion blur
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; 
      ctx.fillRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height); // Fully clear for clean lines in light mode
      
      ctx.shadowBlur = 0; // Disable shadow for lines to improve performance
      
      // Update coordinates & Draw Synapses (Connections)
      for (let i = 0; i < numParticles; i++) {
        particles[i].update();
        
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          // Calculate Euclidean distance
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // The closer they are, the stronger the connection
            const alpha = (1 - (dist / connectionDistance)) * 0.5;
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Draw Nodes (Rendered last to appear above lines)
      for (let i = 0; i < numParticles; i++) {
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Responsive resizing
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-10 rounded-[3rem]"
    />
  );
};

export default HeroNetwork;
