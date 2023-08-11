import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'datenschutz',
  title: 'Datenschutz',
  type: 'document',
  fields: [
    defineField({
      name: 'datenschutz',
      title: 'Datenschutz',
      type: 'blockContent',
    }),
  ],
})
