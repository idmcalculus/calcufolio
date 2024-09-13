import { NextResponse } from 'next/server'
import { extract } from '@extractus/oembed-extractor'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    const data = await extract(url)
    return NextResponse.json({
      title: data.title,
      description: data.author_name,
      image: data.thumbnail_url,
    })
  } catch (error) {
    console.error('Error fetching preview data:', error)
    return NextResponse.json({ error: 'Failed to fetch preview data' }, { status: 500 })
  }
}