'use client';

import { useEffect, useRef } from 'react';

interface WaveformVisualizerProps {
  className?: string;
  barCount?: number;
  color?: string;
}

export default function WaveformVisualizer({
  className,
  barCount = 40,
  color,
}: WaveformVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bars = container.querySelectorAll<HTMLDivElement>('.waveform-bar');
    const animations: number[] = [];

    bars.forEach((bar, i) => {
      const animate = () => {
        const height = 20 + Math.sin(Date.now() / 500 + i * 0.5) * 15 + Math.random() * 10;
        bar.style.height = `${height}%`;
        animations[i] = requestAnimationFrame(animate);
      };
      animations[i] = requestAnimationFrame(animate);
    });

    return () => animations.forEach(cancelAnimationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex items-end justify-center gap-[2px] h-16 ${className || ''}`}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="waveform-bar w-1 rounded-full transition-all duration-100"
          style={{
            backgroundColor: color || 'var(--accent)',
            height: '30%',
            opacity: 0.6 + (i / barCount) * 0.4,
          }}
        />
      ))}
    </div>
  );
}
