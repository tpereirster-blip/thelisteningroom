import Link from 'next/link'
import EventCard from '@/components/EventCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import { featuredEvents, cities } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full border border-gold/5" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-gold/5" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/5" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-gold/5" />
        </div>

        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-tobacco/10 via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 fade-up">
          <p className="font-display text-xs tracking-ultra text-gold uppercase mb-6">
            Atlanta · Oakland
          </p>

          {/* Art Deco ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-16 h-px bg-gold/40" />
            <span className="text-gold/60 text-xs">◆</span>
            <span className="block w-16 h-px bg-gold/40" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream uppercase tracking-widest leading-none mb-6">
            The<br />
            <span className="text-gold">Listening</span><br />
            Room
          </h1>

          <div className="flex items-center justify-center gap-4 my-8">
            <span className="block w-16 h-px bg-gold/40" />
            <span className="text-gold/60 text-xs">◆</span>
            <span className="block w-16 h-px bg-gold/40" />
          </div>

          <p className="font-body italic text-xl md:text-2xl text-parchment/70 mb-4">
            Where music becomes ceremony.
          </p>
          <p className="font-body text-parchment/50 text-sm tracking-wide max-w-sm mx-auto mb-12">
            Intimate album listening parties. No phones. No chatter.<br className="hidden md:block" /> Just the record, the room, and the people in it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/events/atlanta"
              className="font-display text-sm tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-noir transition-all duration-300 min-w-[180px]"
            >
              Atlanta →
            </Link>
            <Link
              href="/events/oakland"
              className="font-display text-sm tracking-widest uppercase border border-cream/30 text-cream/70 px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 min-w-[180px]"
            >
              Oakland →
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/40">
          <span className="font-display text-xs tracking-ultra uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* ─── THE FORMAT ───────────────────────────────────────── */}
      <section className="bg-parchment/5 border-t border-b border-gold/10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-4">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
              Not a concert.<br />Not a club night.<br />
              <span className="italic text-parchment/60">Something rarer.</span>
            </h2>
            <p className="font-body text-parchment/60 text-base max-w-lg mx-auto leading-relaxed">
              An intimate gathering built around one album, played front to back, without interruption. The tradition of the salon — conversation, community, and the shared experience of art — updated for the records that shaped us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gold/20">
            {[
              {
                num: '01',
                title: 'The Album',
                body: 'One record, chosen with care. Classic works from the jazz era, soul, funk, and R&B. Albums that reward deep listening.',
              },
              {
                num: '02',
                title: 'The Room',
                body: 'A bar, a lounge, a backroom — somewhere intimate and honest. We cap every event at the room\'s natural capacity. No crowds. No strangers by the end.',
              },
              {
                num: '03',
                title: 'The Ritual',
                body: 'Doors open. Drinks are poured. The needle drops. We listen from Side A to Side B without breaking. Conversation follows.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gold/20 last:border-0">
                <p className="font-display text-3xl text-gold/20 mb-4">{num}</p>
                <h3 className="font-display text-xl text-cream mb-3">{title}</h3>
                <p className="font-body text-parchment/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY MISSION ────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-gold/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — headline */}
            <div>
              <p className="font-display text-xs tracking-ultra text-gold uppercase mb-6">Who This Is For</p>
              <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8">
                Find your<br />
                <span className="italic text-gold">sonic community.</span>
              </h2>
              <div className="w-16 h-px bg-gold/40 mb-8" />
              <p className="font-body text-parchment/70 text-lg leading-relaxed mb-6">
                A structured emotional and intellectual processing space — using music as the medium, and the room as the method.
              </p>
              <p className="font-body text-parchment/50 text-base leading-relaxed">
                We believe the right album, heard with the right people, at the right moment, can do what therapy, journaling, and late-night conversations have always tried to do: help you feel something clearly.
              </p>
            </div>

            {/* Right — for who */}
            <div className="border border-gold/20 divide-y divide-gold/10">
              {[
                {
                  label: 'Creatives',
                  body: 'Writers, designers, directors, makers — people who process the world through art and need spaces that do the same.',
                },
                {
                  label: 'Music Lovers',
                  body: "Not casual listeners. The ones who read liner notes, remember where they were the first time they heard an album, and have opinions about Side B.",
                },
                {
                  label: 'Deep Feelers',
                  body: "People who've always used music to name what they couldn't say out loud. This room was built for you.",
                },
                {
                  label: 'The Curious',
                  body: 'Those who want to understand why a record matters — historically, culturally, personally. The conversation after the listen is as important as the listen.',
                },
                {
                  label: 'Community Seekers',
                  body: 'Anyone tired of surface-level socializing. Here, the music does the introduction. The rest follows naturally.',
                },
              ].map(({ label, body }) => (
                <div key={label} className="px-6 py-5 hover:bg-gold/5 transition-colors duration-200">
                  <p className="font-display text-sm text-gold tracking-wider mb-1">{label}</p>
                  <p className="font-body text-parchment/55 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ──────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-display text-xs tracking-ultra text-gold uppercase mb-3">On the Calendar</p>
              <h2 className="font-display text-3xl md:text-4xl text-cream">Upcoming listens</h2>
            </div>
            <Link
              href="/events"
              className="hidden md:block font-display text-xs tracking-widest uppercase text-gold/70 hover:text-gold transition-colors"
            >
              All events →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-noir">
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/events"
              className="font-display text-xs tracking-widest uppercase text-gold/70 hover:text-gold transition-colors"
            >
              See all events →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CITIES ───────────────────────────────────────────── */}
      <section className="border-t border-gold/10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-3">The Cities</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream">Where we gather</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/events/${city.id}`}
                className="group bg-noir p-10 md:p-14 hover:bg-parchment/5 transition-colors duration-300"
              >
                <p className="font-display text-xs tracking-ultra text-gold uppercase mb-2">{city.state}</p>
                <h3 className="font-display text-4xl md:text-5xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                  {city.name}
                </h3>
                <p className="font-body italic text-parchment/50 text-sm mb-6">{city.tagline}</p>
                <div className="w-12 h-px bg-gold/40 mb-6 group-hover:w-20 transition-all duration-500" />
                <p className="font-body text-parchment/60 text-sm leading-relaxed mb-6">
                  {city.description}
                </p>
                <p className="font-body text-parchment/30 text-xs tracking-wider">
                  {city.neighborhoods}
                </p>
                <p className="font-display text-xs tracking-widest text-gold uppercase mt-8 group-hover:translate-x-2 transition-transform duration-300">
                  {city.upcomingCount} upcoming →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO PULL QUOTE ─────────────────────────────── */}
      <section className="py-24 px-6 text-center border-t border-gold/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="block w-16 h-px bg-gold/30" />
            <span className="text-gold/50 text-xs">◆</span>
            <span className="block w-16 h-px bg-gold/30" />
          </div>
          <blockquote className="font-display text-2xl md:text-4xl text-cream/80 italic leading-relaxed mb-8">
            "We gather the way the salons gathered — not to be entertained, but to be transformed."
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="block w-16 h-px bg-gold/30" />
            <span className="text-gold/50 text-xs">◆</span>
            <span className="block w-16 h-px bg-gold/30" />
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────── */}
      <section className="bg-parchment/5 border-t border-gold/10 py-24 px-6">
        <NewsletterSignup />
      </section>
    </>
  )
}
