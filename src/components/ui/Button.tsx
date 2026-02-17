'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]';

  const variants = {
    primary: 'px-6 py-3 text-sm tracking-wider',
    secondary: 'px-6 py-3 text-sm tracking-wider border',
    ghost: 'px-4 py-2 text-sm',
  };

  const style: React.CSSProperties = {
    borderRadius: 'var(--radius)',
    ...(variant === 'primary' && {
      backgroundColor: 'var(--accent)',
      color: '#FFFFFF',
    }),
    ...(variant === 'secondary' && {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border)',
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
      color: 'var(--text-secondary)',
    }),
  };

  const Component = (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      style={style}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {Component}
      </a>
    );
  }

  return Component;
}
