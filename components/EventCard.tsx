import Link from 'next/link'
import { formatShortDate } from '@/lib/data'
import type { Event } from '@/lib/types'

interface Props {
  event: Event
  featured?: boolean
}

export default function EventCard({ event, featured = false }: Props) {
  const spotsPercent = Math.round((event.spotsLeft / event.capacity) * 100)
  const almostGone = event.spotsLeft <= 10

  return (
    <Link
      href={`/events/${event.city}/${event.slug}`}
      className="group block border border-gold/20 hover:border-gold/50 transition-all duration-400 overflow-hidden"
    >
      {/* Album art placeholder */}
      <div
        className="relative w-full aspect-square flex flex-col items-center justify-center p-6 overflow-hidden"
        style={{ backgroundColor: event.cardBg }}
      >
        {/* Vinyl ring */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-64 h-64 rounded-full border-[1px] border-current" style={{ color: event.cardAccent }} />
          <div className="absolute w-48 h-48 rounded-full border-[1px] border-current" style={{ color: event.cardAccent }} />
          <div className="absolute w-32 h-32 rounded-full border-[1px] border-current" style={{ color: event.cardAccent }} />
          <div className="absolute w-16 h-16 rounded-full border-[1px] border-current" style={{ color: event.cardAccent }} />
          <div className="absolute w-5 h-5 rounded-full" style={{ backgroundColor: event.cardAccent, opacity: 0.6 }} />
        </div>

        {/* Album info */}
        <div className="relative z-10 text-center">
          <p
            className="font-display text-xs tracking-ultra uppercase mb-3"
            style={{ color: event.cardAccent, opacity: 0.7 }}
          >
            {event.year} · {event.genre}
          </p>
          <h3
            className="font-display text-2xl md:text-3xl leading-tight mb-2"
            style={{ color: event.cardAccent }}
          >
            {event.album}
          </h3>
          <p
            className="font-body italic text-base"
            style={{ color: event.cardAccent, opacity: 0.8 }}
          >
            {event.artist}
          </p>
        </div>

        {/* City badge */}
        <div
          className="absolute top-4 left-4 font-display text-xs tracking-ultra uppercase px-2 py-1"
          style={{
            backgroundColor: event.cardAccent + '22',
            color: event.cardAccent,
            border: `1px solid ${event.cardAccent}44`,
          }}
        >
          {event.city}
        </div>
      </div>

      {/* Card body */}
      <div className="bg-noir p-5 border-t border-gold/10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-display text-xs tracking-wider text-gold uppercase">
              {formatShortDate(event.date)}
            </p>
            <p className="font-body text-cream/30 text-xs mt-0.5 italic">
              Location revealed after purchase
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-display text-lg text-gold">${event.price}</p>
            <p className="font-body text-xs text-cream/40">per seat</p>
          </div>
        </div>

        {/* Spots bar */}
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className={`font-body text-xs ${almostGone ? 'text-bordeaux' : 'text-cream/40'}`}>
              {almostGone ? `Only ${event.spotsLeft} left` : `${event.spotsLeft} spots remaining`}
            </span>
          </div>
          <div className="h-px w-full bg-cream/10 overflow-hidden">
            <div
              className="h-full transition-all duration-700"
              style={{
                width: `${100 - spotsPercent}%`,
                backgroundColor: almostGone ? '#6B1E2A' : '#C4922A',
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {event.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="font-body text-xs text-parchment/40 border border-parchment/10 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-display text-xs tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform duration-200">
            Reserve →
          </span>
        </div>
      </div>
    </Link>
  )
}
