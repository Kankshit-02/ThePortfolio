'use client';

import { useTheme } from '@/hooks/useTheme';
import SocialLinks from '@/components/ui/SocialLinks';

export default function Footer() {
  const { mode } = useTheme();

  return (
    <footer
      className="py-12 border-t transition-colors duration-500"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span
            className="font-display text-lg font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {mode === 'dev' ? 'KANKSHIT' : 'Kankshit'}
          </span>

          {/* Social Links */}
          <SocialLinks />

          {/* Copyright */}
          <p
            className="text-sm"
            style={{
              color: 'var(--text-muted)',
              fontFamily: mode === 'dev' ? "'JetBrains Mono', monospace" : "'Source Serif 4', serif",
            }}
          >
            &copy; {new Date().getFullYear()} Kankshit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
