'use client';

import { useTheme } from '@/hooks/useTheme';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  const { mode } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <h1
          className="font-display text-8xl md:text-[150px] font-bold"
          style={{ color: 'var(--accent)' }}
        >
          404
        </h1>
        <p
          className="mt-4 text-xl"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: mode === 'dev' ? "'JetBrains Mono', monospace" : "'Source Serif 4', serif",
          }}
        >
          {mode === 'dev'
            ? '> Error: Page not found in production.'
            : "This track doesn't exist yet."}
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="primary">
              {mode === 'dev' ? 'RETURN HOME' : 'Go Home'}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
