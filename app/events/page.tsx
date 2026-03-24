'use client'

import { useState } from 'react'
import EventCard from '@/components/EventCard'
import { events, cities } from '@/lib/data'
import type { CityId } from '@/lib/types'

type Filter = CityId | 'all'

export default function EventsPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? events : events.filter((e) => e.city === filter)

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-ultra text-gold uppercase mb-4">On the Calendar</p>
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-6">All Events</h1>
          <div className="deco-line max-w-xs mx-auto">
            <span className="text-gold/40 text-xs">◆</span>
          </div>
        </div>

        {/* City filter */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(['all', 'atlanta', 'oakland'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-display text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
                filter === f
                  ? 'bg-gold text-noir border-gold'
                  : 'border-gold/30 text-parchment/60 hover:border-gold/60 hover:text-gold'
              }`}
            >
              {f === 'all' ? 'All Cities' : cities.find((c) => c.id === f)?.name ?? f}
            </button>
          ))}
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="text-center font-body italic text-parchment/40 py-20">
            No upcoming events in {filter}. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {visible.map((event) => (
              <div key={event.id} className="bg-noir">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
