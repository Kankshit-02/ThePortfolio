import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kankshit — Developer & Musician',
  description: '[PLACEHOLDER: Meta description — a brief, compelling summary of who Kankshit is]',
  keywords: ['developer', 'musician', 'full-stack', 'react', 'go', 'kubernetes', 'music producer', 'guitarist'],
  authors: [{ name: 'Kankshit' }],
  openGraph: {
    title: 'Kankshit — Developer & Musician',
    description: '[PLACEHOLDER: OG description]',
    url: 'https://kankshit.dev',
    siteName: 'Kankshit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kankshit — Developer & Musician',
    description: '[PLACEHOLDER: Twitter description]',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="dev" suppressHydrationWarning>
      <head>
        {/* Google Fonts — Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Dev Mode Fonts: JetBrains Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Music Mode Fonts: Playfair Display, Source Serif 4, Caveat */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:wght@300;400;600&family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/*
        ╔══════════════════════════════════════════╗
        ║  Hey, you're inspecting the source!      ║
        ║  Nice. I like your curiosity.            ║
        ║  — Kankshit                              ║
        ╚══════════════════════════════════════════╝
      */}
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
