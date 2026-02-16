'use client';

import { useTheme } from '@/hooks/useTheme';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import BlogPostCard from '@/components/ui/BlogPostCard';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

const posts = [
  {
    title: '[PLACEHOLDER: Blog post 1 title]',
    date: '[PLACEHOLDER: Date]',
    readTime: '5 min read',
    category: 'Dev' as const,
    slug: 'placeholder-post-1',
    excerpt: '[PLACEHOLDER: A brief excerpt of what this blog post is about — 1-2 sentences]',
  },
  {
    title: '[PLACEHOLDER: Blog post 2 title]',
    date: '[PLACEHOLDER: Date]',
    readTime: '3 min read',
    category: 'Music' as const,
    slug: 'placeholder-post-2',
    excerpt: '[PLACEHOLDER: A brief excerpt of what this blog post is about — 1-2 sentences]',
  },
  {
    title: '[PLACEHOLDER: Blog post 3 title]',
    date: '[PLACEHOLDER: Date]',
    readTime: '7 min read',
    category: 'Life' as const,
    slug: 'placeholder-post-3',
    excerpt: '[PLACEHOLDER: A brief excerpt of what this blog post is about — 1-2 sentences]',
  },
];

export default function BlogPage() {
  const { mode } = useTheme();

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="mb-16">
            <h2
              className="font-display text-5xl md:text-6xl font-bold"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: mode === 'dev' ? '0.1em' : '-0.02em',
                textTransform: mode === 'dev' ? 'uppercase' : 'none',
              }}
            >
              {mode === 'dev' ? 'BLOG' : 'Blog'}
            </h2>
            {mode === 'dev' ? (
              <div className="h-1 w-20 mt-3" style={{ backgroundColor: 'var(--accent)' }} />
            ) : (
              <div className="flex items-center gap-3 mt-3">
                <span className="h-px w-16" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="font-script text-lg" style={{ color: 'var(--accent)' }}>&#x2726;</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 0.1}>
                <BlogPostCard {...post} />
              </RevealOnScroll>
            ))}
          </div>

          <p
            className="text-center mt-12 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            [PLACEHOLDER: Blog posts will be added here — this is the listing template]
          </p>
        </Container>
      </Section>
    </div>
  );
}
