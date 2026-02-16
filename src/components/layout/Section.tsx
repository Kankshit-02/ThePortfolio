'use client';

import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <RevealOnScroll>
        {children}
      </RevealOnScroll>
    </section>
  );
}
