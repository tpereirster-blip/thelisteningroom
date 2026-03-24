import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 pb-20 max-w-3xl mx-auto text-center">
        <p className="font-display text-xs tracking-ultra text-gold uppercase mb-6">About</p>
        <h1 className="font-display text-5xl md:text-6xl text-cream mb-8 leading-tight">
          A room where<br />music is the point.
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-16 h-px bg-gold/40" />
          <span className="text-gold/60 text-xs">◆</span>
          <span className="block w-16 h-px bg-gold/40" />
        </div>
        <p className="font-body italic text-parchment/60 text-lg leading-relaxed">
          The Listening Room was built from a simple frustration: we had all this music — important, beautiful, life-changing music — and nowhere to really hear it.
        </p>
      </section>

      {/* Origin */}
      <section className="px-6 py-20 border-t border-gold/10 bg-parchment/5">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-xs tracking-ultra text-gold uppercase mb-6">The Origin</p>
          <div className="space-y-6 font-body text-parchment/70 text-base leading-loose">
            <p>
              The Black salons of Paris — the apartments and back rooms where James Baldwin held court, where writers and musicians gathered in the 1950s and 60s — were not formal. They were not ticketed events with a stage and a program. They were rooms where people who cared about ideas, music, and each other came together to be serious about something.
            </p>
            <p>
              The Harlem Renaissance worked the same way. The beauty parlors and barbershops of the American South. The supper clubs of Chicago's South Side. These were spaces where culture got made between people — not delivered to them.
            </p>
            <p>
              The Listening Room is that tradition, updated. We pick one record — a Coltrane suite, a Marvin Gaye album, a Curtis Mayfield debut — and we sit with it. Front to back. No phones. No shuffle. No background noise.
            </p>
            <p>
              When the record ends, we talk. Or we don't. Sometimes the room just sits in it for a minute. That's fine too.
            </p>
          </div>
        </div>
      </section>

      {/* The rules */}
      <section className="px-6 py-20 border-t border-gold/10">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-xs tracking-ultra text-gold uppercase mb-10">The Format</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'One album per event.',
                body: 'We choose a single record and commit to it. No DJ sets. No playlists. One body of work, heard the way it was intended.',
              },
              {
                title: 'No phones during the listen.',
                body: 'We ask everyone to put their phones away when the needle drops. This is the only rule we enforce.',
              },
              {
                title: 'Small rooms.',
                body: 'We cap every event at the natural capacity of the space. Intimacy is non-negotiable.',
              },
              {
                title: 'Drinks encouraged.',
                body: 'We partner with bars and lounges. This is a social gathering. Have a drink.',
              },
              {
                title: 'Conversation after.',
                body: 'When the album ends, we open the floor. Nothing is mandatory, but the conversations that happen in these rooms are part of what makes them worth showing up for.',
              },
              {
                title: 'No expertise required.',
                body: "You don't need to know the liner notes. You need to want to listen.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-l-2 border-gold/30 pl-5">
                <h3 className="font-display text-base text-cream mb-2">{title}</h3>
                <p className="font-body text-parchment/55 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="px-6 py-20 border-t border-gold/10 bg-parchment/5">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-xs tracking-ultra text-gold uppercase mb-6">Where We Are</p>
          <p className="font-body text-parchment/60 text-base leading-relaxed mb-10">
            We started in Atlanta and Oakland because these are cities with deep musical roots and communities that already know how to gather. We're building slowly and carefully — the plan is to be embedded in a city before we move on to the next one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events/atlanta"
              className="font-display text-sm tracking-widest uppercase border border-gold/60 text-gold px-6 py-3 hover:bg-gold hover:text-noir transition-all text-center"
            >
              Atlanta →
            </Link>
            <Link
              href="/events/oakland"
              className="font-display text-sm tracking-widest uppercase border border-cream/20 text-cream/60 px-6 py-3 hover:border-gold hover:text-gold transition-all text-center"
            >
              Oakland →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-gold/10 py-20 px-6">
        <NewsletterSignup />
      </section>
    </div>
  )
}
