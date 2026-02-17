'use client';

import { useTheme } from '@/hooks/useTheme';
import { AnimatePresence, motion } from 'framer-motion';
import HeroDev from '@/components/sections/HeroDev';
import HeroMusic from '@/components/sections/HeroMusic';

export default function Home() {
  const { mode, isTransitioning } = useTheme();

  return (
    <>
      {/* Mode transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="mode-transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: mode === 'dev'
                ? 'radial-gradient(circle at center, rgba(225, 6, 0, 0.08) 0%, transparent 70%)'
                : 'radial-gradient(circle at center, rgba(212, 98, 43, 0.08) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {mode === 'dev' ? (
          <motion.div
            key="dev-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroDev />
          </motion.div>
        ) : (
          <motion.div
            key="music-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroMusic />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
