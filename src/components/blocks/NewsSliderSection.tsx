import configPromise from '@payload-config'
import { NewsSliderSectionType } from '@/payload-types'
import NewsSliderSectionClient from '../NewsSliderSectionClient'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

export default async function NewsSliderSection(props: NewsSliderSectionType) {
  const draft = await draftMode()
  const isDraftMode = draft.isEnabled

  const payload = await getPayload({ config: configPromise })
  const newsData = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
    draft: isDraftMode,
  })
  const newsCategoriesData = await payload.find({
    collection: 'news-categories',
    draft: isDraftMode,
  })

  return (
    <NewsSliderSectionClient
      staticData={{ ...props }}
      news={newsData.docs}
      categories={newsCategoriesData.docs}
    />
  )
}
