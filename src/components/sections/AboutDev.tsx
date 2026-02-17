'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Go', 'Python',
  'Kubernetes', 'Docker', 'AWS', 'Terraform', 'Node.js',
  'PostgreSQL', 'Redis', 'GraphQL', 'Tailwind CSS',
];

const timeline = [
  {
    year: '[PLACEHOLDER: Year]',
    title: '[PLACEHOLDER: Milestone title]',
    description: '[PLACEHOLDER: Brief description of this milestone]',
  },
  {
    year: '[PLACEHOLDER: Year]',
    title: 'Co-founded Nudgebee',
    description: '[PLACEHOLDER: Brief description of starting Nudgebee — DevOps/SRE AI startup]',
  },
  {
    year: '[PLACEHOLDER: Year]',
    title: '[PLACEHOLDER: Another milestone]',
    description: '[PLACEHOLDER: Brief description]',
  },
];

export default function AboutDev() {
  return (
    <Section id="about">
      <Container>
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            className="font-display text-5xl md:text-6xl font-bold tracking-wider uppercase"
            style={{ color: 'var(--text-primary)' }}
          >
            ABOUT
          </h2>
          <div className="h-1 w-20 mt-3" style={{ backgroundColor: 'var(--accent)' }} />
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Photo */}
          <div className="lg:col-span-2">
            <div
              className="aspect-square border-2 flex items-center justify-center"
              style={{
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <span
                className="font-mono text-sm text-center px-8"
                style={{ color: 'var(--text-muted)' }}
              >
                [PLACEHOLDER: Photo or 3D avatar]
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-6">
            <p style={{ color: 'var(--text-secondary)' }} className="text-base leading-relaxed">
              [PLACEHOLDER: First paragraph about your dev journey — how you got started, what drives you]
            </p>
            <p style={{ color: 'var(--text-secondary)' }} className="text-base leading-relaxed">
              [PLACEHOLDER: Second paragraph about Nudgebee — what it does, your role as co-founder, the tech behind it]
            </p>
            <p style={{ color: 'var(--text-secondary)' }} className="text-base leading-relaxed">
              [PLACEHOLDER: Third paragraph about your tech philosophy — how you approach building software, what excites you]
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <RevealOnScroll>
          <h3
            className="font-display text-2xl font-bold tracking-wider uppercase mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            TECH STACK
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {techStack.map((tech, i) => (
              <RevealOnScroll key={tech} delay={i * 0.05}>
                <Card className="flex items-center justify-center py-4 px-3">
                  <span
                    className="font-mono text-sm tracking-wide"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tech}
                  </span>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <RevealOnScroll className="mt-20">
          <h3
            className="font-display text-2xl font-bold tracking-wider uppercase mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            JOURNEY
          </h3>
          <div className="relative border-l-2" style={{ borderColor: 'var(--border)' }}>
            {timeline.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <div className="ml-8 mb-10 relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2"
                    style={{
                      borderColor: 'var(--accent)',
                      backgroundColor: 'var(--bg-primary)',
                    }}
                  />
                  <Tag variant="accent">{item.year}</Tag>
                  <h4
                    className="font-display text-lg font-bold mt-2 tracking-wide uppercase"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
