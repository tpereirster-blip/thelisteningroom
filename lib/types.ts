export type CityId = 'atlanta' | 'oakland'

export interface Event {
  id: string
  slug: string
  city: CityId
  album: string
  artist: string
  year: number
  genre: string
  venue: string
  address: string
  neighborhood: string
  date: string
  doorsTime: string
  startTime: string
  price: number
  capacity: number
  spotsLeft: number
  description: string
  albumDescription: string
  tags: string[]
  featured: boolean
  cardBg: string
  cardAccent: string
}

export interface City {
  id: CityId
  name: string
  state: string
  tagline: string
  description: string
  neighborhoods: string
  upcomingCount: number
}
