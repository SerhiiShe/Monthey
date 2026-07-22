import configPromise from '@payload-config'
import { NewsSliderSectionType } from '@/payload-types'
import NewsSliderSectionClient from '../NewsSliderSectionClient'
import { getPayload } from 'payload'

export default async function NewsSliderSection(props: NewsSliderSectionType) {
  const payload = await getPayload({ config: configPromise })
  const newsData = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
  })
  const newsCategoriesData = await payload.find({
    collection: 'news-categories',
  })

  return (
    <NewsSliderSectionClient
      staticData={{ ...props }}
      news={newsData.docs}
      categories={newsCategoriesData.docs}
    />
  )
}
