import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  versions: {
    drafts: true,
  },
  // admin: {
  //   useAsTitle: 'title',
  //   livePreview: { url: ({ data }) => `https://monthey.vercel.app/api/preview?slug=${data.slug}` },
  // },
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create' || operation === 'update') {
          revalidatePath('/blog')
          revalidatePath(`/blog/${doc.id}`)

          console.log(`Cache for post ${doc.title} successfully reset!`)
        }

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
