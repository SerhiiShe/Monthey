import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Navbar from './Navbar'
import { draftMode } from 'next/headers'

export default async function Header() {
  const draft = await draftMode()
  const isDraftMode = draft.isEnabled

  const payload = await getPayload({ config: configPromise })

  const data = await payload.findGlobal({
    slug: 'header',
    draft: isDraftMode,
  })

  return <Navbar {...data} isDraftMode={isDraftMode} />
}
