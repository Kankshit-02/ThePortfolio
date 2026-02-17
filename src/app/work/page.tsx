'use client';

import { useTheme } from '@/hooks/useTheme';
import { AnimatePresence, motion } from 'framer-motion';
import WorkDev from '@/components/sections/WorkDev';
import WorkMusic from '@/components/sections/WorkMusic';

export default function WorkPage() {
  const { mode } = useTheme();

  return (
    <div className="pt-20">
      <AnimatePresence mode="wait">
        {mode === 'dev' ? (
          <motion.div
            key="work-dev"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <WorkDev />
          </motion.div>
        ) : (
          <motion.div
            key="work-music"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <WorkMusic />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
