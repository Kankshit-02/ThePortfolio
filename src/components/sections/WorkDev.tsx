'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

const featuredProject = {
  name: 'Nudgebee',
  description: '[PLACEHOLDER: 2-3 sentences about Nudgebee — what it does, the problem it solves, your role]',
  tech: ['Go', 'React', 'Kubernetes', 'AI/ML', 'Python'],
  link: '[PLACEHOLDER: Nudgebee URL]',
  github: '[PLACEHOLDER: GitHub repo URL if public]',
};

const projects = [
  {
    name: '[PLACEHOLDER: Project 2 name]',
    description: '[PLACEHOLDER: Project 2 description — 1-2 sentences]',
    tech: ['[PLACEHOLDER: Tech 1]', '[PLACEHOLDER: Tech 2]', '[PLACEHOLDER: Tech 3]'],
    link: '[PLACEHOLDER: Project URL]',
  },
  {
    name: '[PLACEHOLDER: Project 3 name]',
    description: '[PLACEHOLDER: Project 3 description — 1-2 sentences]',
    tech: ['[PLACEHOLDER: Tech 1]', '[PLACEHOLDER: Tech 2]'],
    link: '[PLACEHOLDER: Project URL]',
  },
  {
    name: '[PLACEHOLDER: Project 4 name]',
    description: '[PLACEHOLDER: Project 4 description — 1-2 sentences]',
    tech: ['[PLACEHOLDER: Tech 1]', '[PLACEHOLDER: Tech 2]'],
    link: '[PLACEHOLDER: Project URL]',
  },
];

export default function WorkDev() {
  return (
    <Section id="work">
      <Container>
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            className="font-display text-5xl md:text-6xl font-bold tracking-wider uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            WORK
          </h2>
          <div className="h-1 w-20 mt-3" style={{ backgroundColor: 'var(--accent)' }} />
        </div>

        {/* Featured Project — Nudgebee */}
        <RevealOnScroll>
          <div
            className="p-8 md:p-12 border-2 mb-16 relative overflow-hidden group"
            style={{
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {/* Accent border glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 0 2px var(--accent)',
                borderRadius: 'var(--radius)',
              }}
            />

            <div className="relative z-10">
              <Tag variant="accent">FEATURED</Tag>

              <h3
                className="font-display text-3xl md:text-4xl font-bold tracking-wider uppercase mt-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {featuredProject.name}
              </h3>

              <p className="mt-4 text-base max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                {featuredProject.description}
              </p>

              {/* Screenshot placeholder */}
              <div
                className="mt-6 aspect-video border flex items-center justify-center"
                style={{
                  borderColor: 'var(--border-subtle)',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <span className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                  [PLACEHOLDER: Nudgebee screenshot/preview]
                </span>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {featuredProject.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <Button variant="primary">View Project →</Button>
                <Button variant="secondary">GitHub</Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.15}>
              <Card className="flex flex-col h-full group">
                {/* Screenshot placeholder */}
                <div
                  className="aspect-video mb-4 border flex items-center justify-center"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--bg-secondary)',
                  }}
                >
                  <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    [PLACEHOLDER: Screenshot]
                  </span>
                </div>

                <h4
                  className="font-display text-lg font-bold tracking-wide uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.name}
                </h4>

                <p className="mt-2 text-sm flex-1" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
