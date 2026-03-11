import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    // TODO: Validate against REVALIDATION_SECRET env var
    // if (secret !== process.env.REVALIDATION_SECRET) {
    //   return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    // }

    const body = await request.json()
    const { _type, slug } = body

    // Revalidate based on content type
    switch (_type) {
      case 'article':
        revalidatePath('/')
        revalidatePath('/wire')
        if (slug?.current) {
          revalidatePath(`/article/${slug.current}`)
        }
        break
      case 'company':
        revalidatePath('/dossier')
        if (slug?.current) {
          revalidatePath(`/dossier/${slug.current}`)
        }
        break
      case 'metric':
        revalidatePath('/')
        revalidatePath('/metrics')
        break
      default:
        revalidatePath('/')
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    )
  }
}
