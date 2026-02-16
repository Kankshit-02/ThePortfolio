'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/animations/CountUp';

interface StatCardProps {
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

export default function StatCard({ number, suffix = '', prefix = '', label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 border transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        borderRadius: 'var(--radius)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="text-3xl md:text-4xl font-bold font-mono"
        style={{ color: 'var(--accent)' }}
      >
        <CountUp end={number} prefix={prefix} suffix={suffix} />
      </span>
      <span
        className="text-xs mt-1 tracking-widest uppercase font-mono"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </motion.div>
  );
}
