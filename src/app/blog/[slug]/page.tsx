'use client';

import { useTheme } from '@/hooks/useTheme';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Link from 'next/link';

export default function BlogPostPage() {
  const { mode } = useTheme();

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Link
              href="/blog"
              className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
            >
              &larr; Back to blog
            </Link>

            <div className="mt-8 mb-12">
              <span
                className="text-sm"
                style={{
                  color: 'var(--text-muted)',
                  fontFamily: mode === 'dev' ? "'JetBrains Mono', monospace" : "'Source Serif 4', serif",
                }}
              >
                [PLACEHOLDER: Date] &middot; [PLACEHOLDER: Read time]
              </span>
              <h1
                className="font-display text-3xl md:text-5xl font-bold mt-4"
                style={{
                  color: 'var(--text-primary)',
                  letterSpacing: mode === 'dev' ? '0.05em' : '-0.02em',
                }}
              >
                [PLACEHOLDER: Blog Post Title]
              </h1>
            </div>

            <article
              style={{
                color: 'var(--text-secondary)',
                fontFamily: mode === 'dev' ? "'Satoshi', sans-serif" : "'Source Serif 4', serif",
                fontSize: mode === 'dev' ? '16px' : '18px',
                lineHeight: mode === 'dev' ? '1.7' : '1.8',
              }}
            >
              <p className="mb-6">[PLACEHOLDER: Blog post content will be rendered here via MDX]</p>
              <p className="mb-6">
                [PLACEHOLDER: This is the individual blog post template. Each post will be written in MDX
                and rendered with full styling support for both dev and music modes.]
              </p>
            </article>
          </div>
        </Container>
      </Section>
    </div>
  );
}
