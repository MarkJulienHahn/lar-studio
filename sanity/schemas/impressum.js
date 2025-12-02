import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'impressum',
  title: 'Impressum',
  type: 'document',
  fields: [
    defineField({
      name: 'kontakt',
      title: 'Kontakt',
      type: 'blockContent',
    }),
    defineField({
      name: 'impressum',
      title: 'Impressum',
      type: 'blockContent',
    }),
  ],
})
