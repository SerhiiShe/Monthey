import type { GlobalConfig } from 'payload'
import { HeroBlock } from '@/blocks/HeroBlock'
import { FeaturesBlock } from '@/blocks/FeaturesBlock'
import { NewsSliderBlock } from '@/blocks/NewsSliderBlock'
import { CtaBlock } from '@/blocks/CtaBlock'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, NewsSliderBlock, FeaturesBlock, CtaBlock],
      required: true,
    },
  ],
}
