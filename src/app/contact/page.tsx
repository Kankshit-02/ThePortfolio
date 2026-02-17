'use client';

import { useTheme } from '@/hooks/useTheme';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import ContactForm from '@/components/sections/ContactForm';
import SocialLinks from '@/components/ui/SocialLinks';

export default function ContactPage() {
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
              {mode === 'dev' ? 'CONTACT' : 'Contact'}
            </h2>
            {mode === 'dev' ? (
              <div className="h-1 w-20 mt-3" style={{ backgroundColor: 'var(--accent)' }} />
            ) : (
              <div className="flex items-center gap-3 mt-3">
                <span className="h-px w-16" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="font-script text-lg" style={{ color: 'var(--accent)' }}>&#x2709;</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p
                className="mb-8 text-lg"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: mode === 'dev' ? "'Satoshi', sans-serif" : "'Source Serif 4', serif",
                }}
              >
                [PLACEHOLDER: A friendly one-liner about getting in touch]
              </p>
              <ContactForm />
            </div>

            <div className="flex flex-col justify-center gap-8">
              <div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {mode === 'dev' ? 'CONNECT' : 'Connect'}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  [PLACEHOLDER: Additional context about preferred ways to reach you]
                </p>
                <SocialLinks />
              </div>

              <div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {mode === 'dev' ? 'LOCATION' : 'Location'}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: mode === 'dev' ? "'JetBrains Mono', monospace" : "'Source Serif 4', serif",
                  }}
                >
                  Pune, India
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
