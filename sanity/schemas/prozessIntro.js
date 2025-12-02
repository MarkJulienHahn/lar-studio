import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prozessIntro',
  title: 'Inspiration Introtext',
  type: 'document',
  fields: [
    defineField({
      name: 'prozessIntro',
      title: 'Text',
      type: 'blockContent',
    }),
  ],
})
