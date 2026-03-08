'use client';

import { useState } from 'react';
import supabase from '@/lib/supabase';

export default function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          setStatus('success');
          return;
        }
        throw error;
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 ${compact ? '' : 'py-3'}`}>
        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm text-green-400 font-body">You&apos;re on the list. We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={`flex gap-2 ${compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className={`flex-1 bg-bg-tertiary border border-border rounded-xl px-4 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 ${
            compact ? 'py-2.5' : 'py-3'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`bg-accent hover:bg-accent-hover text-white font-display font-semibold rounded-xl px-6 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap ${
            compact ? 'py-2.5 text-sm' : 'py-3 text-sm'
          }`}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Joining...
            </span>
          ) : (
            'Get Early Access'
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-sm text-red-400 mt-2 font-body">Something went wrong. Try again?</p>
      )}
      <p className={`text-text-muted font-body mt-2 text-xs`}>
        No spam, just updates when it&apos;s ready. Beta spots are limited.
      </p>
    </div>
  );
}