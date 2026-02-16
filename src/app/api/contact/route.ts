import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, reason, message } = body;

    // Validation
    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // [PLACEHOLDER: Integrate with email service]
    // Options:
    // 1. Resend: https://resend.com/docs
    //    import { Resend } from 'resend';
    //    const resend = new Resend(process.env.RESEND_API_KEY);
    //    await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' });
    //
    // 2. Formspree: Submit to Formspree endpoint
    //
    // 3. SendGrid, Mailgun, etc.

    console.log('Contact form submission:', { name, email, reason, message });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
