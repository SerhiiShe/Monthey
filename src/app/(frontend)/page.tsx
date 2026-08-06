import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/components/RenderBlocks'
import { draftMode } from 'next/headers'

export default async function Page() {
  const draft = await draftMode()
  const isDraftMode = draft.isEnabled

  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'home-page', draft: isDraftMode })

  return (
    <main>
      <RenderBlocks layout={data.layout || []} />
    </main>
  )
}
