import { useEffect, useRef } from "react";

interface Particle {
  t: number;
  speed: number;
  size: number;
  opacity: number;
  hue: number;
  trail: { x: number; y: number }[];
}

const InfinityBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Infinity path parametric equation (lemniscate of Bernoulli)
    const getPoint = (t: number, cx: number, cy: number, scale: number) => {
      const denom = 1 + Math.sin(t) * Math.sin(t);
      const x = cx + (scale * Math.cos(t)) / denom;
      const y = cy + (scale * Math.sin(t) * Math.cos(t)) / denom;
      return { x, y };
    };

    // Create particles
    const PARTICLE_COUNT = 24;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      t: (i / PARTICLE_COUNT) * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.006,
      size: 1.5 + Math.random() * 2,
      opacity: 0.5 + Math.random() * 0.5,
      hue: [185, 215, 260][Math.floor(Math.random() * 3)],
      trail: [],
    }));

    // Blink points along the path
    const BLINK_COUNT = 12;
    const blinkPoints = Array.from({ length: BLINK_COUNT }, (_, i) => ({
      t: (i / BLINK_COUNT) * Math.PI * 2,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const scale = Math.min(canvas.width * 0.32, canvas.height * 0.28);

      // Draw infinity path
      ctx.beginPath();
      for (let i = 0; i <= 200; i++) {
        const t = (i / 200) * Math.PI * 2;
        const p = getPoint(t, cx, cy, scale);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.strokeStyle = "hsla(185, 80%, 55%, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Second glow layer
      ctx.strokeStyle = "hsla(215, 85%, 60%, 0.04)";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Blink points
      blinkPoints.forEach((bp) => {
        const p = getPoint(bp.t, cx, cy, scale);
        const glow = (Math.sin(time * 1.5 + bp.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(185, 80%, 65%, ${glow * 0.35})`;
        ctx.fill();
      });

      // Particles
      particles.forEach((particle) => {
        particle.t += particle.speed;
        if (particle.t > Math.PI * 2) particle.t -= Math.PI * 2;

        const p = getPoint(particle.t, cx, cy, scale);

        // Trail
        particle.trail.push({ x: p.x, y: p.y });
        if (particle.trail.length > 8) particle.trail.shift();

        // Draw trail
        for (let i = 0; i < particle.trail.length - 1; i++) {
          const alpha = (i / particle.trail.length) * particle.opacity * 0.3;
          ctx.beginPath();
          ctx.arc(particle.trail[i].x, particle.trail[i].y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${alpha})`;
          ctx.fill();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 65%, ${particle.opacity * 0.7})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${particle.opacity * 0.1})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default InfinityBackground;
