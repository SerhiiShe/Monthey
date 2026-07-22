import type { Block } from 'payload'

export const NewsSliderBlock: Block = {
  slug: 'news-slider',
  interfaceName: 'NewsSliderSectionType',
  labels: {
    singular: 'News Slider Section',
    plural: 'News Slider Sections',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'buttonText', type: 'text' },
    { name: 'buttonUrl', type: 'text' },
  ],
}
