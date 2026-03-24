import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-noir border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-1">The</p>
            <h2 className="font-display text-2xl tracking-widest text-cream uppercase mb-4">
              Listening Room
            </h2>
            <p className="font-body text-parchment/60 text-sm leading-relaxed italic">
              "The function of music is to release us from the tyranny of conscious thought."
            </p>
            <p className="font-body text-parchment/40 text-xs mt-2">— Sir Thomas Beecham</p>
          </div>

          {/* Cities */}
          <div>
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-4">Cities</p>
            <ul className="space-y-2">
              {[
                { href: '/events/atlanta', label: 'Atlanta, GA' },
                { href: '/events/oakland', label: 'Oakland, CA' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-parchment/70 hover:text-gold transition-colors text-sm tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 font-body text-parchment/30 text-xs italic">
                More cities coming
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="font-display text-xs tracking-ultra text-gold uppercase mb-4">More</p>
            <ul className="space-y-2">
              {[
                { href: '/events', label: 'All Events' },
                { href: '/about', label: 'About' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-parchment/70 hover:text-gold transition-colors text-sm tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deco line */}
        <div className="deco-line mb-6">
          <span className="font-display text-gold/40 text-xs tracking-ultra">◆</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-parchment/30 text-xs tracking-wider">
            © {new Date().getFullYear()} The Listening Room. All rights reserved.
          </p>
          <p className="font-body text-parchment/30 text-xs tracking-wider italic">
            Gather. Listen. Feel.
          </p>
        </div>
      </div>
    </footer>
  )
}
