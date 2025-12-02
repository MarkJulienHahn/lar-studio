import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontakt',
  title: 'Kontakt',
  type: 'document',
  fields: [
    defineField({
      name: 'kontakt',
      title: 'Kontakt',
      type: 'blockContent',
    }),
  ],
})
