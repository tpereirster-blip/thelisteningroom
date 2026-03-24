import { Event, City } from './types'

export const events: Event[] = [
  {
    id: '1',
    slug: 'whats-going-on-atlanta-april-2026',
    city: 'atlanta',
    album: "What's Going On",
    artist: 'Marvin Gaye',
    year: 1971,
    genre: 'Soul / R&B',
    venue: 'The Painted Pin',
    address: '737 Ponce De Leon Ave NE',
    neighborhood: 'Poncey-Highland',
    date: '2026-04-12T20:00:00',
    doorsTime: '7:30 PM',
    startTime: '8:00 PM',
    price: 25,
    capacity: 60,
    spotsLeft: 18,
    description:
      "Join us for an intimate listen of one of the most important albums ever recorded. We'll sit with Marvin's masterpiece from start to finish — no phones, no chatter, just sound. Conversation follows the needle.",
    albumDescription:
      "Released in 1971, What's Going On is Marvin Gaye's magnum opus — a suite of soul, jazz, and funk that spoke directly to the Vietnam era while sounding timeless. This is the album that changed what R&B could be.",
    tags: ['Soul', 'R&B', 'Concept Album'],
    featured: true,
    cardBg: '#2C1810',
    cardAccent: '#D4A847',
  },
  {
    id: '2',
    slug: 'a-love-supreme-atlanta-may-2026',
    city: 'atlanta',
    album: 'A Love Supreme',
    artist: 'John Coltrane',
    year: 1965,
    genre: 'Jazz',
    venue: 'The Sound Table',
    address: '483 Edgewood Ave SE',
    neighborhood: 'Old Fourth Ward',
    date: '2026-05-10T20:00:00',
    doorsTime: '7:30 PM',
    startTime: '8:00 PM',
    price: 30,
    capacity: 45,
    spotsLeft: 7,
    description:
      "A sacred listen. Coltrane's suite played in full in candlelight. Come prepared to be moved. This one fills fast.",
    albumDescription:
      "John Coltrane's A Love Supreme (1965) is widely considered the greatest jazz album ever recorded — a four-part suite of devotion, resolution, pursuit, and psalm. There are albums, and there is this.",
    tags: ['Jazz', 'Spiritual', 'Suite'],
    featured: true,
    cardBg: '#1A2C3D',
    cardAccent: '#C4922A',
  },
  {
    id: '3',
    slug: 'aretha-i-never-loved-atlanta-april-2026',
    city: 'atlanta',
    album: "I Never Loved a Man the Way I Love You",
    artist: 'Aretha Franklin',
    year: 1967,
    genre: 'Soul',
    venue: 'Ponce City Market — The Green',
    address: '675 Ponce De Leon Ave NE',
    neighborhood: 'Old Fourth Ward',
    date: '2026-04-26T19:30:00',
    doorsTime: '7:00 PM',
    startTime: '7:30 PM',
    price: 25,
    capacity: 70,
    spotsLeft: 31,
    description:
      "Aretha's debut Atlantic album — the one that announced her arrival. We'll listen front to back, then open the floor to anyone who has something to say about what just happened.",
    albumDescription:
      'Her first Atlantic album. The one where Aretha Franklin stopped being polished and started being herself. Raw, devastating, electric. Recorded in Muscle Shoals, released in 1967.',
    tags: ['Soul', 'Gospel', 'Debut'],
    featured: false,
    cardBg: '#6B1E2A',
    cardAccent: '#F2EBD9',
  },
  {
    id: '4',
    slug: 'head-hunters-oakland-april-2026',
    city: 'oakland',
    album: 'Head Hunters',
    artist: 'Herbie Hancock',
    year: 1973,
    genre: 'Jazz Funk',
    venue: 'The Starline Social Club',
    address: '2236 Martin Luther King Jr Way',
    neighborhood: 'North Oakland',
    date: '2026-04-19T20:00:00',
    doorsTime: '7:30 PM',
    startTime: '8:00 PM',
    price: 25,
    capacity: 80,
    spotsLeft: 22,
    description:
      "The album that bridged jazz and funk and changed both forever. We'll listen in full, then stay as long as the conversation goes.",
    albumDescription:
      "Herbie Hancock's Head Hunters (1973) is the best-selling jazz album of all time — a record that fused acoustic jazz with electric funk in ways that still sound futuristic today. Side A alone is a masterclass.",
    tags: ['Jazz Funk', 'Electric', 'Groove'],
    featured: true,
    cardBg: '#2D5A27',
    cardAccent: '#D4A847',
  },
  {
    id: '5',
    slug: 'donny-hathaway-live-oakland-may-2026',
    city: 'oakland',
    album: 'Donny Hathaway Live',
    artist: 'Donny Hathaway',
    year: 1972,
    genre: 'Soul / R&B',
    venue: 'Actual Cafe',
    address: '6080 Telegraph Ave',
    neighborhood: 'Temescal',
    date: '2026-05-03T19:30:00',
    doorsTime: '7:00 PM',
    startTime: '7:30 PM',
    price: 20,
    capacity: 50,
    spotsLeft: 14,
    description:
      "Possibly the greatest live album ever recorded. We'll listen as a room and feel what those audiences felt at the Troubadour and the Bitter End.",
    albumDescription:
      'Recorded at the Troubadour in LA and the Bitter End in New York, Donny Hathaway Live (1972) captures an artist at the absolute peak of his powers. The audience reaction says everything.',
    tags: ['Soul', 'Live', 'R&B'],
    featured: true,
    cardBg: '#4A3728',
    cardAccent: '#C4922A',
  },
  {
    id: '6',
    slug: 'curtis-mayfield-oakland-may-2026',
    city: 'oakland',
    album: 'Curtis',
    artist: 'Curtis Mayfield',
    year: 1970,
    genre: 'Soul / Funk',
    venue: 'The New Parish',
    address: '579 18th St',
    neighborhood: 'Uptown',
    date: '2026-05-17T20:00:00',
    doorsTime: '7:30 PM',
    startTime: '8:00 PM',
    price: 25,
    capacity: 100,
    spotsLeft: 53,
    description:
      "Curtis Mayfield's debut solo album. The Impressions were great, but this was something else entirely. We'll listen, then talk about what made this man so necessary.",
    albumDescription:
      "Curtis (1970) arrived the same year as What's Going On and was equally visionary — funk, soul, and protest wrapped in silk strings and wah-wah guitar. One of the defining voices of the movement.",
    tags: ['Soul', 'Funk', 'Debut'],
    featured: false,
    cardBg: '#1E3A4A',
    cardAccent: '#D4A847',
  },
]

export const cities: City[] = [
  {
    id: 'atlanta',
    name: 'Atlanta',
    state: 'GA',
    tagline: 'The South Has Something to Say',
    description:
      "Atlanta's listening party scene lives in the same neighborhoods that birthed the civil rights movement — Old Fourth Ward, West End, Poncey-Highland. We gather in bars and lounges where the music hits differently.",
    neighborhoods: 'Old Fourth Ward · Poncey-Highland · West End · Buckhead',
    upcomingCount: events.filter((e) => e.city === 'atlanta').length,
  },
  {
    id: 'oakland',
    name: 'Oakland',
    state: 'CA',
    tagline: "The Town Has Always Known",
    description:
      'Oakland has always run its own music — from the Black Arts Movement to funk and soul scenes that defined West Coast sound. We listen in the spots where the community already gathers.',
    neighborhoods: 'Temescal · Uptown · North Oakland · Fruitvale',
    upcomingCount: events.filter((e) => e.city === 'oakland').length,
  },
]

export const featuredEvents = events.filter((e) => e.featured).slice(0, 4)

export const getEventsByCity = (city: string) =>
  events.filter((e) => e.city === city)

export const getEventBySlug = (slug: string) =>
  events.find((e) => e.slug === slug) ?? null

export const getCityById = (id: string) =>
  cities.find((c) => c.id === id) ?? null

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
