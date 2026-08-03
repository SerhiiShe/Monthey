import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const NewsCategories: CollectionConfig = {
  slug: 'news-categories',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create' || operation === 'update') {
          revalidatePath('/', 'layout')

          console.log(`Cache for news categories ${doc.title} successfully reset!`)
        }

        return doc
      },
    ],
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
