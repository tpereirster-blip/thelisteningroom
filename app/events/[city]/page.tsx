import { notFound } from 'next/navigation'
import Link from 'next/link'
import EventCard from '@/components/EventCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import { getEventsByCity, getCityById } from '@/lib/data'

interface Props {
  params: { city: string }
}

export function generateStaticParams() {
  return [{ city: 'atlanta' }, { city: 'oakland' }]
}

export default function CityPage({ params }: Props) {
  const city = getCityById(params.city)
  if (!city) notFound()

  const cityEvents = getEventsByCity(params.city)

  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* City hero */}
      <section className="px-6 pb-20 border-b border-gold/10">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/events"
            className="font-display text-xs tracking-widest text-gold/50 hover:text-gold uppercase transition-colors mb-10 inline-block"
          >
            ← All Cities
          </Link>

          <div className="mt-4">
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-2">{city.state}</p>
            <h1 className="font-display text-6xl md:text-8xl text-cream uppercase tracking-widest mb-4">
              {city.name}
            </h1>
            <p className="font-body italic text-parchment/60 text-lg mb-8">{city.tagline}</p>
            <div className="w-20 h-px bg-gold/40 mb-8" />
            <p className="font-body text-parchment/60 text-base leading-relaxed max-w-xl mb-4">
              {city.description}
            </p>
            <p className="font-body text-parchment/30 text-xs tracking-wider">
              {city.neighborhoods}
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-display text-xs tracking-ultra text-gold uppercase mb-2">
                {cityEvents.length} upcoming
              </p>
              <h2 className="font-display text-2xl text-cream">Upcoming in {city.name}</h2>
            </div>
          </div>

          {cityEvents.length === 0 ? (
            <p className="font-body italic text-parchment/40 py-12">
              No events scheduled yet. Join the list to be first to know.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
              {cityEvents.map((event) => (
                <div key={event.id} className="bg-noir">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-parchment/5 border-t border-gold/10 py-20 px-6">
        <NewsletterSignup city={city.name} />
      </section>
    </div>
  )
}
