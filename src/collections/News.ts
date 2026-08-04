import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    preview: (doc) => {
      if (doc?.id) {
        return `http://localhost:3000/api/preview?url=/news/${doc.id}&secret=${process.env.PREVIEW_SECRET_TOKEN}`
      }
      return null
    },
  },
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create' || operation === 'update') {
          revalidatePath('/')
          revalidatePath(`/news/${doc.id}`)

          console.log(`Cache for news ${doc.title} successfully reset!`)
        }

        return doc
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidatePath('/')
        revalidatePath(`/news/${doc.id}`)

        console.log(`Cache for news ${doc.title} successfully reset!`)

        return doc
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'news-categories',
      hasMany: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
