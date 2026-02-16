'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import WaveformVisualizer from '@/components/animations/WaveformVisualizer';
import Button from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

export default function HeroMusic() {
  const { toggleMode } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden paper-grain">
      <Container className="relative z-10 py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Name */}
          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-[100px] lg:text-[120px] font-bold leading-none"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            Kankshit
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 my-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <span className="h-px w-16" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="font-script text-lg" style={{ color: 'var(--accent)' }}>♪</span>
            <span className="h-px w-16" style={{ backgroundColor: 'var(--accent)' }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl italic"
            style={{ color: 'var(--text-secondary)' }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Musician · Producer · Guitarist
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="mt-6 text-base md:text-lg max-w-md mx-auto"
            style={{ color: 'var(--text-muted)' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            [PLACEHOLDER: Hero tagline — one expressive line about your music]
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Button variant="primary">
              Listen →
            </Button>
          </motion.div>

          {/* Waveform */}
          <motion.div
            className="mt-16"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.8, duration: 0.8 } },
            }}
          >
            <WaveformVisualizer barCount={50} />
          </motion.div>

          {/* Mode Switch Hint */}
          <motion.button
            className="mt-12 text-sm cursor-pointer transition-colors duration-200 hover:text-[var(--accent)]"
            style={{
              color: 'var(--text-muted)',
              fontFamily: "'Source Serif 4', serif",
            }}
            onClick={toggleMode}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 1.2, duration: 0.5 } },
            }}
          >
            I also write code →
          </motion.button>
        </motion.div>
      </Container>

      {/* Warm ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: 'var(--accent)' }}
      />
    </section>
  );
}
