'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypeWriter({
  text,
  speed = 50,
  className,
  cursor = true,
}: TypeWriterProps) {
  const { ref, isInView } = useInView({ once: true });
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  // Blinking cursor
  useEffect(() => {
    if (!cursor) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {cursor && (
        <span
          className="inline-block w-[2px] h-[1em] ml-0.5 align-middle"
          style={{
            backgroundColor: 'var(--accent)',
            opacity: showCursor ? 1 : 0,
          }}
        />
      )}
    </span>
  );
}
