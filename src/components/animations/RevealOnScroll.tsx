'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { type ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function RevealOnScroll({
  children,
  className,
  direction = 'up',
  delay = 0,
}: RevealOnScrollProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
