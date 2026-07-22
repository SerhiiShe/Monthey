import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  // Запрашиваем данные Home Page
  const data = await payload.findGlobal({ slug: 'home-page' })

  return (
    <main>
      <RenderBlocks layout={data.layout || []} />
    </main>
  )
}
