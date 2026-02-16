'use client';

import { cn } from '@/lib/utils';
import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const inputStyles: React.CSSProperties = {
  backgroundColor: 'var(--bg-card)',
  borderColor: 'var(--border)',
  color: 'var(--text-primary)',
  borderRadius: 'var(--radius)',
};

const labelStyles: React.CSSProperties = {
  color: 'var(--text-secondary)',
};

export function TextInput({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={labelStyles}>
        {label}
      </label>
      <input
        className={cn(
          'px-4 py-3 border text-sm transition-colors duration-200 focus:outline-none focus:border-[var(--accent)]',
          className
        )}
        style={inputStyles}
        {...props}
      />
      {error && (
        <span className="text-xs" style={{ color: 'var(--accent)' }}>
          {error}
        </span>
      )}
    </div>
  );
}

export function TextArea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={labelStyles}>
        {label}
      </label>
      <textarea
        className={cn(
          'px-4 py-3 border text-sm transition-colors duration-200 focus:outline-none focus:border-[var(--accent)] resize-y min-h-[120px]',
          className
        )}
        style={inputStyles}
        {...props}
      />
      {error && (
        <span className="text-xs" style={{ color: 'var(--accent)' }}>
          {error}
        </span>
      )}
    </div>
  );
}

export function Select({ label, error, options, className, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={labelStyles}>
        {label}
      </label>
      <select
        className={cn(
          'px-4 py-3 border text-sm transition-colors duration-200 focus:outline-none focus:border-[var(--accent)]',
          className
        )}
        style={inputStyles}
        {...props}
      >
        <option value="">Select an option...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs" style={{ color: 'var(--accent)' }}>
          {error}
        </span>
      )}
    </div>
  );
}
