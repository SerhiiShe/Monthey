import { revalidatePath } from 'next/cache'
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  versions: { drafts: true },
  label: 'Footer',
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/', 'layout')
        return doc
      },
    ],
  },
  fields: [
    { name: 'formLable', type: 'text', required: true },
    { name: 'formPlaceholder', type: 'text' },
    { name: 'formButtonText', type: 'text', required: true },
    { name: 'contactTitle', type: 'text' },
    { name: 'contactAddress', type: 'text' },
    { name: 'contactPhone1', type: 'text' },
    { name: 'contactPhone2', type: 'text' },
    { name: 'contactEmail', type: 'text' },
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
    { name: 'socialMediaTitle', type: 'text' },
    {
      name: 'socialMediaLinks',
      type: 'array',
      label: 'Social Media Links',
      minRows: 1,
      fields: [
        {
          name: 'socialMediaImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'socialMediaLink',
          type: 'text',
          required: true,
        },
      ],
    },
    { name: 'pageLinksTitle', type: 'text' },
    {
      name: 'pageLinks',
      type: 'array',
      label: 'Page Links Links',
      minRows: 1,
      fields: [
        {
          name: 'pageName',
          type: 'text',
          required: true,
        },
        {
          name: 'pageLink',
          type: 'text',
          required: true,
        },
      ],
    },
    { name: 'copyright', type: 'text' },
    {
      name: 'bottomLinks',
      type: 'array',
      label: 'Page Links Links',
      minRows: 1,
      fields: [
        {
          name: 'bottomLinkText',
          type: 'text',
          required: true,
        },
        {
          name: 'bottomLink',
          type: 'text',
          required: true,
        },
      ],
    },
    { name: 'developerName', type: 'text' },
    { name: 'developerLink', type: 'text' },
  ],
}
