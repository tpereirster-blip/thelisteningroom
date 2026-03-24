'use client'

import { useState } from 'react'
import { Event } from '@/lib/types'
import { formatDate } from '@/lib/data'

interface Props {
  event: Event
  onClose: () => void
}

export default function RSVPModal({ event, onClose }: Props) {
  const [form, setForm]     = useState({ name: '', email: '', tickets: 1 })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  function set(field: string, value: string | number) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, eventId: event.id, eventSlug: event.slug }),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-noir/90 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg bg-noir border border-gold/30 p-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-cream/40 hover:text-gold transition-colors font-body text-xl"
        >
          ×
        </button>

        {status === 'done' ? (
          <div className="text-center py-8">
            <p className="font-display text-gold text-xs tracking-ultra uppercase mb-4">Confirmed ◆</p>
            <h3 className="font-display text-3xl text-cream mb-4">You're in.</h3>
            <p className="font-body italic text-parchment/60 text-base mb-2">
              Check your inbox for details on {event.venue}.
            </p>
            <p className="font-body text-parchment/40 text-sm">
              {formatDate(event.date)} · Doors {event.doorsTime}
            </p>
            <button
              onClick={onClose}
              className="mt-8 font-display text-xs tracking-widest uppercase text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-noir transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-display text-gold text-xs tracking-ultra uppercase mb-2">Reserve Your Seat</p>
            <h3 className="font-display text-2xl text-cream mb-1">{event.album}</h3>
            <p className="font-body italic text-parchment/60 text-sm mb-1">{event.artist}</p>
            <p className="font-body text-parchment/40 text-xs mb-6">
              {formatDate(event.date)} · {event.venue} · {event.neighborhood}
            </p>

            <div className="deco-line mb-6">
              <span className="text-gold/40 text-xs">◆</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-display text-xs tracking-wider text-gold/80 uppercase block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="w-full bg-transparent border border-gold/30 focus:border-gold text-cream font-body px-4 py-3 text-sm outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-wider text-gold/80 uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="w-full bg-transparent border border-gold/30 focus:border-gold text-cream font-body px-4 py-3 text-sm outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-wider text-gold/80 uppercase block mb-2">
                  Tickets
                </label>
                <select
                  value={form.tickets}
                  onChange={(e) => set('tickets', Number(e.target.value))}
                  className="w-full bg-noir border border-gold/30 focus:border-gold text-cream font-body px-4 py-3 text-sm outline-none transition-colors"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'ticket' : 'tickets'} — ${event.price * n}
                    </option>
                  ))}
                </select>
              </div>

              {status === 'error' && (
                <p className="font-body text-bordeaux text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-display text-sm tracking-widest uppercase bg-gold text-noir py-4 hover:bg-amber transition-colors disabled:opacity-50 mt-2"
              >
                {status === 'loading'
                  ? 'Reserving...'
                  : `Reserve — $${event.price * form.tickets}`}
              </button>

              <p className="font-body text-parchment/40 text-xs text-center">
                Includes one complimentary drink per ticket.
              </p>
              <p className="font-body text-parchment/30 text-xs text-center">
                {event.spotsLeft} seats remaining out of {event.capacity}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
