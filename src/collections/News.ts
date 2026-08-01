import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
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
