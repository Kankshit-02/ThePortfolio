'use client';

import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export default function Tag({ children, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider transition-colors duration-300',
        className
      )}
      style={{
        borderRadius: 'var(--radius)',
        ...(variant === 'default'
          ? {
              backgroundColor: 'var(--bg-elevated)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
            }
          : {
              backgroundColor: 'var(--accent-glow)',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }),
      }}
    >
      {children}
    </span>
  );
}
