import { revalidatePath } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  versions: { drafts: true },
  label: 'Header',
  admin: {
    preview: () => {
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/api/preview?url=/&secret=${process.env.PREVIEW_SECRET_TOKEN}`
    },
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/', 'layout')
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
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
  ],
}
