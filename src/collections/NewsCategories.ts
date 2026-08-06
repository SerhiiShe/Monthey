import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const NewsCategories: CollectionConfig = {
  slug: 'news-categories',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
    preview: () => {
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/api/preview?url=/&secret=${process.env.PREVIEW_SECRET_TOKEN}`
    },
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
    afterDelete: [
      ({ doc }) => {
        revalidatePath('/', 'layout')

        console.log(`Cache for news categories ${doc.title} successfully reset!`)

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
