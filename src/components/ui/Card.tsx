'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn('p-6 border transition-all duration-200', className)}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
      }}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: 'var(--shadow)',
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
