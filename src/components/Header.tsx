import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Navbar from './Navbar'

export default async function Header() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'header' })

  return <Navbar {...data} />
}
