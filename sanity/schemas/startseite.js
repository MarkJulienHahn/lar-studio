import {defineField, defineType} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'

export default defineType({
  name: 'startseite',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'subheadline', type: 'string'}),
    defineField({
      name: 'architektur',
      type: 'object',
      fields: [
        {
          name: 'bild',
          title: 'Bild',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
        {name: 'headline', type: 'string'},
        {name: 'text', type: 'blockContent'},
      ],
    }),
    defineField({
      name: 'design',
      type: 'object',
      fields: [
        {
          name: 'bild',
          title: 'Bild',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
        {name: 'headline', type: 'string'},
        {name: 'text', type: 'blockContent'},
      ],
    }),
    defineField({
      name: 'raumpsychologie',
      type: 'object',
      fields: [
        {
          name: 'bild',
          title: 'Bild',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
        {name: 'headline', type: 'string'},
        {name: 'text', type: 'blockContent'},
      ],
    }),
    orderRankField({type: 'landing'}),
  ],
})
