'use client';

import { useTheme } from '@/hooks/useTheme';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  date: string;
  readTime: string;
  category: 'Dev' | 'Music' | 'Life';
  slug: string;
  excerpt: string;
}

export default function BlogPostCard({
  title,
  date,
  readTime,
  category,
  slug,
  excerpt,
}: BlogPostCardProps) {
  const { mode } = useTheme();

  return (
    <Link href={`/blog/${slug}`}>
      <Card className="flex flex-col h-full cursor-pointer group">
        <div className="flex items-center gap-3 mb-3">
          <Tag variant="accent">{category}</Tag>
          <span
            className="text-xs"
            style={{
              color: 'var(--text-muted)',
              fontFamily: mode === 'dev' ? "'JetBrains Mono', monospace" : "'Source Serif 4', serif",
            }}
          >
            {date}
          </span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            · {readTime}
          </span>
        </div>

        <h3
          className="font-display text-xl font-bold transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>

        <p className="mt-2 text-sm flex-1" style={{ color: 'var(--text-secondary)' }}>
          {excerpt}
        </p>

        <span
          className="mt-4 text-sm font-medium transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: 'var(--text-muted)' }}
        >
          {mode === 'dev' ? 'Read more →' : 'Read more →'}
        </span>
      </Card>
    </Link>
  );
}
