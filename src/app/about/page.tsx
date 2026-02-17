'use client';

import { useTheme } from '@/hooks/useTheme';
import { AnimatePresence, motion } from 'framer-motion';
import AboutDev from '@/components/sections/AboutDev';
import AboutMusic from '@/components/sections/AboutMusic';

export default function AboutPage() {
  const { mode } = useTheme();

  return (
    <div className="pt-20">
      <AnimatePresence mode="wait">
        {mode === 'dev' ? (
          <motion.div
            key="about-dev"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AboutDev />
          </motion.div>
        ) : (
          <motion.div
            key="about-music"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AboutMusic />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
