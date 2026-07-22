import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  interfaceName: 'FeaturesSectionType',
  labels: {
    singular: 'Features Section',
    plural: 'Features Sections',
  },
  fields: [
    { name: 'date', type: 'text' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'featureImage', type: 'upload', relationTo: 'media', required: true },
        { name: 'featureTitle', type: 'text', required: true },
        { name: 'featureDescription', type: 'textarea' },
        {
          name: 'status',
          type: 'select',
          label: 'Status Color',
          defaultValue: 'green',
          required: true,
          options: [
            {
              label: 'Green (Open)',
              value: 'green',
            },
            {
              label: 'Red (Closed)',
              value: 'red',
            },
          ],
        },
      ],
    },
  ],
}
