import type { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'badgeText', type: 'text' },
    { name: 'buttonText', type: 'text' },
    { name: 'buttonLink', type: 'text' },
  ],
}
