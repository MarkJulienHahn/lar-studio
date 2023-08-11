import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'agb',
  title: 'Agb',
  type: 'document',
  fields: [
    defineField({
      name: 'agb',
      title: 'Agb',
      type: 'blockContent',
    }),
  ],
})
