import { revalidatePath } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  versions: { drafts: true },
  label: 'Header',
  hooks: {
    afterChange: [
      ({ doc }) => {
        // Параметр 'layout' говорит Vercel сбросить кеш вообще для всех страниц
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
