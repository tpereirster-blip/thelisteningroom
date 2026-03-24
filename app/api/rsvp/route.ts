import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, tickets, eventId, eventSlug } = body

    if (!name || !email || !eventId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: persist to database (Supabase, Postgres, etc.)
    // TODO: send confirmation email (Resend, etc.)
    // For now, log and return success
    console.log('[RSVP]', { name, email, tickets, eventId, eventSlug, ts: new Date().toISOString() })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
