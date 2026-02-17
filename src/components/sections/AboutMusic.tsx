'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

const gear = [
  { name: '[PLACEHOLDER: Guitar model]', type: 'Guitar' },
  { name: 'FL Studio', type: 'DAW' },
  { name: '[PLACEHOLDER: Mic model]', type: 'Microphone' },
  { name: '[PLACEHOLDER: Amp/Interface]', type: 'Audio Interface' },
  { name: '[PLACEHOLDER: Other gear]', type: 'Effects' },
];

const timeline = [
  {
    year: '[PLACEHOLDER: Year]',
    title: '[PLACEHOLDER: When you started playing]',
    description: '[PLACEHOLDER: Brief description of how music began for you]',
  },
  {
    year: '[PLACEHOLDER: Year]',
    title: '[PLACEHOLDER: Started producing]',
    description: '[PLACEHOLDER: When you picked up FL Studio / production]',
  },
  {
    year: '[PLACEHOLDER: Year]',
    title: '[PLACEHOLDER: Notable music milestone]',
    description: '[PLACEHOLDER: First release, collab, performance, etc.]',
  },
];

export default function AboutMusic() {
  return (
    <Section id="about">
      <Container>
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            About
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <span className="h-px w-16" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="font-script text-lg" style={{ color: 'var(--accent)' }}>♪</span>
          </div>
        </div>

        {/* Bio Section — editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Photo - larger, editorial */}
          <div>
            <div
              className="aspect-[3/4] border flex items-center justify-center"
              style={{
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <span
                className="text-sm text-center px-8"
                style={{ color: 'var(--text-muted)', fontFamily: "'Source Serif 4', serif" }}
              >
                [PLACEHOLDER: Photo — warm-toned, golden hour aesthetic]
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-6">
            <p
              style={{ color: 'var(--text-secondary)', fontFamily: "'Source Serif 4', serif" }}
              className="text-lg leading-relaxed"
            >
              [PLACEHOLDER: First paragraph about your music journey — how you fell in love with music, your earliest memories with instruments]
            </p>
            <p
              style={{ color: 'var(--text-secondary)', fontFamily: "'Source Serif 4', serif" }}
              className="text-lg leading-relaxed"
            >
              [PLACEHOLDER: Second paragraph about your production style — genres you explore, what your sound is like, influences]
            </p>
            <p
              style={{ color: 'var(--text-secondary)', fontFamily: "'Source Serif 4', serif" }}
              className="text-lg leading-relaxed"
            >
              [PLACEHOLDER: Third paragraph about what music means to you — the creative process, how it complements your dev life]
            </p>
          </div>
        </div>

        {/* Gear Showcase */}
        <RevealOnScroll>
          <h3
            className="font-display text-2xl font-bold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            Gear &amp; Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gear.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <Card className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl"
                    style={{ backgroundColor: 'var(--bg-elevated)' }}
                  >
                    🎸
                  </div>
                  <h4
                    className="font-medium text-sm"
                    style={{ color: 'var(--text-primary)', fontFamily: "'Source Serif 4', serif" }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {item.type}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Musical Journey Timeline */}
        <RevealOnScroll className="mt-20">
          <h3
            className="font-display text-2xl font-bold mb-8"
            style={{ color: 'var(--text-primary)' }}
          >
            Musical Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <div
                  className="flex gap-6 p-6 border transition-all duration-300"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--bg-card)',
                  }}
                >
                  <span
                    className="text-3xl font-bold font-script shrink-0"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <h4
                      className="font-display text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: 'var(--text-muted)', fontFamily: "'Source Serif 4', serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
