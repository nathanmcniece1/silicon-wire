import { NextResponse } from 'next/server'
import { tickerItems } from '@/lib/mock-data'

export async function GET() {
  return NextResponse.json({
    items: tickerItems,
    updatedAt: new Date().toISOString(),
  })
}
