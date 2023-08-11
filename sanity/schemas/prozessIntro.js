import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prozessIntro',
  title: 'Prozess Introtext',
  type: 'document',
  fields: [
    defineField({
      name: 'prozessIntro',
      title: 'Text',
      type: 'blockContent',
    }),
  ],
})
