'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-noir/95 backdrop-blur border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xs tracking-ultra text-gold uppercase">
            The
          </span>
          <span className="font-display text-lg tracking-widest text-cream uppercase group-hover:text-gold transition-colors duration-300">
            Listening Room
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/events', label: 'Events' },
            { href: '/events/atlanta', label: 'Atlanta' },
            { href: '/events/oakland', label: 'Oakland' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm tracking-wider text-parchment/80 hover:text-gold transition-colors duration-200 gold-hover"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/events"
            className="ml-4 font-display text-sm tracking-widest uppercase border border-gold/60 text-gold px-5 py-2 hover:bg-gold hover:text-noir transition-all duration-300"
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className={clsx('block w-6 h-px bg-gold transition-all duration-300', open && 'rotate-45 translate-y-2')} />
          <span className={clsx('block w-6 h-px bg-gold transition-all duration-300', open && 'opacity-0')} />
          <span className={clsx('block w-6 h-px bg-gold transition-all duration-300', open && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-noir/98 border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {[
            { href: '/events', label: 'All Events' },
            { href: '/events/atlanta', label: 'Atlanta' },
            { href: '/events/oakland', label: 'Oakland' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-lg tracking-wider text-cream hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
