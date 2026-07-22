import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroSectionType',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'searchPlaceholder', type: 'text' },
    { name: 'linksTitle', type: 'text' },
    {
      name: 'links',
      type: 'array',
      label: 'Hero Links',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    { name: 'selectTitle', type: 'text' },
    { name: 'selectPlaceholder', type: 'text' },
    {
      name: 'selectOptions',
      type: 'array',
      label: 'Select Options',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
