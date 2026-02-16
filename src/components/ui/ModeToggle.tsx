'use client';

import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

export default function ModeToggle() {
  const { mode, toggleMode, isTransitioning } = useTheme();

  return (
    <button
      onClick={toggleMode}
      disabled={isTransitioning}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--bg-card)',
      }}
      aria-label={`Switch to ${mode === 'dev' ? 'music' : 'dev'} mode`}
    >
      {/* DEV label */}
      <span
        className="text-xs font-bold tracking-wider transition-colors duration-300 font-mono"
        style={{
          color: mode === 'dev' ? 'var(--accent)' : 'var(--text-muted)',
        }}
      >
        DEV
      </span>

      {/* Toggle track */}
      <div
        className="relative w-10 h-5 rounded-full transition-colors duration-500"
        style={{
          backgroundColor: mode === 'dev' ? 'var(--bg-elevated)' : 'var(--bg-elevated)',
        }}
      >
        <motion.div
          className="absolute top-0.5 w-4 h-4 rounded-full"
          style={{
            backgroundColor: 'var(--accent)',
          }}
          animate={{
            left: mode === 'dev' ? '2px' : '22px',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>

      {/* MUSIC label */}
      <span
        className="text-xs font-bold tracking-wider transition-colors duration-300"
        style={{
          color: mode === 'music' ? 'var(--accent)' : 'var(--text-muted)',
          fontFamily: mode === 'music' ? "'Caveat', cursive" : 'inherit',
          fontSize: mode === 'music' ? '14px' : undefined,
        }}
      >
        {mode === 'music' ? '♪' : '♪'}
      </span>
    </button>
  );
}
