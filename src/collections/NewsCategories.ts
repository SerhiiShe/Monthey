import type { CollectionConfig } from 'payload'

export const NewsCategories: CollectionConfig = {
  slug: 'news-categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
  ],
}
