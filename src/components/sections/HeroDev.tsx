'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import StatCard from '@/components/ui/StatCard';
import TypeWriter from '@/components/animations/TypeWriter';
import Button from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

export default function HeroDev() {
  const { toggleMode } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-grid scanlines">
      <Container className="relative z-10 py-32">
        {/* Staggered Hero Content */}
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Name */}
          <motion.h1
            className="font-display text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] font-bold leading-none tracking-wider uppercase"
            style={{ color: 'var(--text-primary)' }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            KANKSHIT
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="h-px w-32 my-4"
            style={{ backgroundColor: 'var(--accent)' }}
            variants={{
              hidden: { scaleX: 0, originX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
          />

          {/* Subtitle */}
          <motion.div
            className="font-mono text-sm md:text-base tracking-widest uppercase"
            style={{ color: 'var(--text-secondary)' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <TypeWriter text="DEVELOPER. BUILDER. ENGINEER." speed={40} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-6 text-lg md:text-xl max-w-xl"
            style={{ color: 'var(--text-muted)' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            [PLACEHOLDER: Hero tagline — one punchy line about what you do as a dev]
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
              EXPLORE WORK ↓
            </Button>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-16 max-w-lg"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <StatCard number={2} suffix="+" label="YRS BUILDING" delay={0.8} />
            <StatCard number={10} suffix="+" label="PROJECTS" delay={1.0} />
            <StatCard number={5} suffix="+" label="TECH STACK" delay={1.2} />
          </motion.div>

          {/* Mode Switch Hint */}
          <motion.button
            className="mt-12 text-sm font-mono tracking-wide cursor-pointer transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)' }}
            onClick={toggleMode}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 1.5, duration: 0.5 } },
            }}
          >
            I also make music →
          </motion.button>
        </motion.div>
      </Container>

      {/* Ambient glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
        style={{ backgroundColor: 'var(--accent)' }}
      />
    </section>
  );
}
