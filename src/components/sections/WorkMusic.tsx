'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import WaveformVisualizer from '@/components/animations/WaveformVisualizer';

const tracks = [
  {
    title: '[PLACEHOLDER: Track 1 title]',
    duration: '[PLACEHOLDER: e.g., 3:45]',
    genre: '[PLACEHOLDER: Genre]',
  },
  {
    title: '[PLACEHOLDER: Track 2 title]',
    duration: '[PLACEHOLDER: e.g., 4:12]',
    genre: '[PLACEHOLDER: Genre]',
  },
  {
    title: '[PLACEHOLDER: Track 3 title]',
    duration: '[PLACEHOLDER: e.g., 2:58]',
    genre: '[PLACEHOLDER: Genre]',
  },
  {
    title: '[PLACEHOLDER: Track 4 title]',
    duration: '[PLACEHOLDER: e.g., 5:20]',
    genre: '[PLACEHOLDER: Genre]',
  },
];

const videos = [
  {
    title: '[PLACEHOLDER: Performance/video 1 title]',
    description: '[PLACEHOLDER: Brief description of this video]',
  },
  {
    title: '[PLACEHOLDER: Performance/video 2 title]',
    description: '[PLACEHOLDER: Brief description]',
  },
];

export default function WorkMusic() {
  return (
    <Section id="music">
      <Container>
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Music
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <span className="h-px w-16" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="font-script text-lg" style={{ color: 'var(--accent)' }}>♪</span>
          </div>
        </div>

        {/* Embedded Player */}
        <RevealOnScroll>
          <div
            className="p-8 border mb-12"
            style={{
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <div
              className="aspect-video flex items-center justify-center mb-6"
              style={{
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <span
                className="text-sm text-center px-8"
                style={{ color: 'var(--text-muted)', fontFamily: "'Source Serif 4', serif" }}
              >
                [PLACEHOLDER: SoundCloud/Spotify/Bandcamp embed or custom music player]
              </span>
            </div>

            <WaveformVisualizer barCount={60} className="mb-6" />
          </div>
        </RevealOnScroll>

        {/* Track List */}
        <RevealOnScroll>
          <h3
            className="font-display text-2xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Tracks
          </h3>
          <div className="space-y-1">
            {tracks.map((track, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div
                  className="flex items-center justify-between p-4 border-b transition-colors duration-200 cursor-pointer group"
                  style={{
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-sm w-6"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--accent)]"
                      style={{ backgroundColor: 'var(--bg-elevated)' }}
                    >
                      <span className="text-xs" style={{ color: 'var(--text-primary)' }}>▶</span>
                    </div>
                    <div>
                      <h4
                        className="font-medium"
                        style={{ color: 'var(--text-primary)', fontFamily: "'Source Serif 4', serif" }}
                      >
                        {track.title}
                      </h4>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {track.genre}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-mono text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {track.duration}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Performances / Videos */}
        <RevealOnScroll className="mt-16">
          <h3
            className="font-display text-2xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Performances
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <Card>
                  <div
                    className="aspect-video mb-4 flex items-center justify-center"
                    style={{
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--bg-secondary)',
                    }}
                  >
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      [PLACEHOLDER: YouTube/video embed]
                    </span>
                  </div>
                  <h4
                    className="font-display text-lg font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {video.title}
                  </h4>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: 'var(--text-muted)', fontFamily: "'Source Serif 4', serif" }}
                  >
                    {video.description}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Collaborations */}
        <RevealOnScroll className="mt-16">
          <h3
            className="font-display text-2xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Collaborations
          </h3>
          <Card>
            <p
              className="text-center py-8"
              style={{ color: 'var(--text-muted)', fontFamily: "'Source Serif 4', serif" }}
            >
              [PLACEHOLDER: Any notable collaborations, features, or joint projects]
            </p>
          </Card>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
