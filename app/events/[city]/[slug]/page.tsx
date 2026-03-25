'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import RSVPModal from '@/components/RSVPModal'
import { getEventBySlug, getCityById, formatDate } from '@/lib/data'

interface Props {
  params: { city: string; slug: string }
}

export default function EventDetailPage({ params }: Props) {
  const event = getEventBySlug(params.slug)
  if (!event) notFound()

  const city = getCityById(params.city)
  const [showRSVP, setShowRSVP] = useState(false)

  const spotsPercent = Math.round((event.spotsLeft / event.capacity) * 100)
  const almostGone = event.spotsLeft <= 10

  return (
    <div className="pt-28 pb-24 min-h-screen">
      {/* Back */}
      <div className="px-6 mb-8 max-w-5xl mx-auto">
        <Link
          href={`/events/${params.city}`}
          className="font-display text-xs tracking-widest text-gold/50 hover:text-gold uppercase transition-colors"
        >
          ← {city?.name ?? 'Events'}
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Album visual */}
        <div>
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={event.coverArt}
              alt={`${event.album} by ${event.artist}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Album description */}
          <div className="mt-8 border border-gold/20 p-6">
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-3">
              About the Album
            </p>
            <p className="font-body text-parchment/70 text-base leading-relaxed">
              {event.albumDescription}
            </p>
          </div>
        </div>

        {/* Event info */}
        <div>
          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-6">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs text-parchment/40 border border-parchment/10 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-display text-xs tracking-ultra text-gold uppercase mb-2">
            {event.city.toUpperCase()}
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-cream mb-1">{event.album}</h1>
          <p className="font-body italic text-parchment/60 text-lg mb-8">{event.artist}</p>

          <div className="deco-line mb-8">
            <span className="text-gold/40 text-xs">◆</span>
          </div>

          {/* Details */}
          <dl className="space-y-5 mb-10">
            {[
              { label: 'Date', value: formatDate(event.date) },
              { label: 'Doors', value: event.doorsTime },
              { label: 'Start', value: event.startTime },
              { label: 'City', value: event.city.charAt(0).toUpperCase() + event.city.slice(1) },
              { label: 'Price', value: `$${event.price} per seat` },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-6">
                <dt className="font-display text-xs tracking-widest text-gold/60 uppercase w-16 shrink-0 pt-0.5">
                  {label}
                </dt>
                <dd className="font-body text-cream/80 text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
            <div className="flex gap-6">
              <dt className="font-display text-xs tracking-widest text-gold/60 uppercase w-16 shrink-0 pt-0.5">
                Venue
              </dt>
              <dd className="font-body text-cream/30 text-sm italic">
                Revealed after purchase
              </dd>
            </div>
          </dl>

          {/* Availability */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className={`font-body text-sm ${almostGone ? 'text-bordeaux' : 'text-parchment/50'}`}>
                {almostGone
                  ? `Only ${event.spotsLeft} seats left`
                  : `${event.spotsLeft} of ${event.capacity} seats remaining`}
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

          {/* Description */}
          <p className="font-body text-parchment/60 text-base leading-relaxed mb-10 italic border-l-2 border-gold/30 pl-5">
            {event.description}
          </p>

          {/* CTA */}
          <button
            onClick={() => setShowRSVP(true)}
            className="w-full font-display text-sm tracking-widest uppercase bg-gold text-noir py-5 hover:bg-amber transition-colors duration-300"
          >
            Reserve Your Seat — ${event.price}
          </button>
          <p className="font-body text-gold/60 text-xs text-center mt-3">
            One complimentary drink included with every ticket.
          </p>
          <p className="font-body text-parchment/30 text-xs text-center mt-1">
            No shows. No phones. No refunds after 48 hours.
          </p>
        </div>
      </div>

      {/* RSVP Modal */}
      {showRSVP && (
        <RSVPModal event={event} onClose={() => setShowRSVP(false)} />
      )}
    </div>
  )
}
