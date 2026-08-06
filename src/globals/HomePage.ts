import { revalidatePath } from 'next/cache'
import type { GlobalConfig } from 'payload'
import { HeroBlock } from '@/blocks/HeroBlock'
import { FeaturesBlock } from '@/blocks/FeaturesBlock'
import { NewsSliderBlock } from '@/blocks/NewsSliderBlock'
import { CtaBlock } from '@/blocks/CtaBlock'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  versions: { drafts: true },
  label: 'Home Page',
  admin: {
    preview: () => {
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/api/preview?url=/&secret=${process.env.PREVIEW_SECRET_TOKEN}`
    },
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/')
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, NewsSliderBlock, FeaturesBlock, CtaBlock],
      required: true,
    },
  ],
}
