'use client';

import { useState, type FormEvent } from 'react';
import { TextInput, TextArea, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

const reasonOptions = [
  { value: 'tech', label: 'Tech/Consulting' },
  { value: 'speaking', label: 'Speaking Opportunity' },
  { value: 'music', label: 'Music Collaboration' },
  { value: 'hello', label: 'Just Saying Hi' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

export default function ContactForm() {
  const { mode } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.reason) newErrors.reason = 'Please select a reason';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      {/* Honeypot — hidden from users */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      <TextInput
        label={mode === 'dev' ? 'NAME' : 'Name'}
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
      />

      <TextInput
        label={mode === 'dev' ? 'EMAIL' : 'Email'}
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />

      <Select
        label={mode === 'dev' ? "I'M REACHING OUT ABOUT..." : "I'm reaching out about..."}
        options={reasonOptions}
        value={formData.reason}
        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        error={errors.reason}
      />

      <TextArea
        label={mode === 'dev' ? 'MESSAGE' : 'Message'}
        placeholder="What's on your mind?"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={errors.message}
      />

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : mode === 'dev' ? 'SEND MESSAGE' : 'Send Message'}
      </Button>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="text-sm" style={{ color: mode === 'dev' ? '#00D4FF' : '#2D7B4F' }}>
          {mode === 'dev'
            ? '> Message sent successfully.'
            : 'Thank you! Your message has been sent.'}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm" style={{ color: 'var(--accent)' }}>
          {mode === 'dev'
            ? '> Error: Message failed to send. Try again.'
            : 'Something went wrong. Please try again.'}
        </p>
      )}
    </form>
  );
}
