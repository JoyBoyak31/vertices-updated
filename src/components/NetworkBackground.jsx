import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Initialize dots array first
    const dots = [];

    // Network configuration
    const config = {
      dotCount: 80,
      maxDistance: 150,
      colors: [
        '#00f5ff', // Cyan
        '#0099ff', // Blue  
        '#6366f1'  // Purple
      ],
      dotRadius: 2,
      lineWidth: 1,
      speed: 0.5
    };

    // Set canvas size and redistribute dots when resizing
    const resizeCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Redistribute existing dots proportionally when resizing (only if dots exist)
      if (oldWidth && oldHeight && dots.length > 0) {
        dots.forEach(dot => {
          dot.x = (dot.x / oldWidth) * canvas.width;
          dot.y = (dot.y / oldHeight) * canvas.height;
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create dot function
    const createDot = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      color: config.colors[Math.floor(Math.random() * config.colors.length)]
    });
    
    // Initialize dots across the entire screen
    for (let i = 0; i < config.dotCount; i++) {
      dots.push(createDot());
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off walls
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;

        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, config.dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < dots.length; j++) {
          const distance = Math.sqrt(
            Math.pow(dot.x - dots[j].x, 2) + Math.pow(dot.y - dots[j].y, 2)
          );

          if (distance < config.maxDistance) {
            const opacity = (config.maxDistance - distance) / config.maxDistance;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `${dot.color}${Math.floor(opacity * 50).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default NetworkBackground;