'use client'

import { useState } from 'react'

export default function NewsletterSignup({ city }: { city?: string }) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // TODO: connect to your email provider (Resend, Mailchimp, etc.)
    await new Promise((r) => setTimeout(r, 800))
    setStatus('done')
    setEmail('')
  }

  return (
    <div className="text-center max-w-md mx-auto">
      <p className="font-display text-xs tracking-ultra text-gold uppercase mb-3">
        {city ? `${city} Updates` : 'Stay in the Know'}
      </p>
      <h3 className="font-display text-2xl md:text-3xl text-cream mb-3">
        Be first through the door.
      </h3>
      <p className="font-body italic text-parchment/60 text-base mb-8">
        Events fill fast. Get early access before they go public.
      </p>

      {status === 'done' ? (
        <p className="font-display text-gold tracking-wider">
          You're on the list. ◆
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-gold/40 text-cream font-body placeholder-cream/30 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="font-display text-sm tracking-widest uppercase bg-gold text-noir px-6 py-3 hover:bg-amber transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? '...' : 'Join'}
          </button>
        </form>
      )}
    </div>
  )
}
