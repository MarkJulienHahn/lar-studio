import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cookies',
  title: 'Cookies',
  type: 'document',
  fields: [
    defineField({
      name: 'cookies',
      title: 'Cookies',
      type: 'blockContent',
    }),
  ],
})
