
import { useEffect, useRef } from 'react';

const BlackHoleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Black hole parameters
    const blackHoleRadius = 40;
    const maxParticles = 100;
    const particles: {x: number, y: number, angle: number, speed: number, radius: number, color: string}[] = [];
    
    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 100 + Math.random() * 200;
      
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        angle,
        speed: 0.5 + Math.random() * 1,
        radius: 1 + Math.random() * 2,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 60%)`
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw black hole
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, blackHoleRadius * 2);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.7, 'rgba(30, 30, 70, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, blackHoleRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw particles
      particles.forEach(particle => {
        // Update position - particles spiral toward the black hole
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Increase speed as it gets closer to black hole
        const force = Math.max(1, 50 / distance);
        
        particle.x += dx / distance * particle.speed * force;
        particle.y += dy / distance * particle.speed * force;
        
        // Draw energy wave effect
        if (distance > blackHoleRadius) {
          const opacity = Math.min(1, 2 - distance / 200);
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla');
          ctx.fill();
          
          // Add energy trail
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(
            particle.x - dx / distance * (particle.radius * 6),
            particle.y - dy / distance * (particle.radius * 6)
          );
          ctx.strokeStyle = particle.color.replace(')', `, ${opacity * 0.5})`).replace('hsl', 'hsla');
          ctx.lineWidth = particle.radius;
          ctx.stroke();
        } else {
          // Reset particle that reached the center
          const angle = Math.random() * Math.PI * 2;
          const newDistance = 300 + Math.random() * 100;
          
          particle.x = centerX + Math.cos(angle) * newDistance;
          particle.y = centerY + Math.sin(angle) * newDistance;
          particle.speed = 0.5 + Math.random() * 1;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-80"
    />
  );
};

export default BlackHoleAnimation;
