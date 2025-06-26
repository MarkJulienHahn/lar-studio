import {defineField, defineType} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'

export default defineType({
  name: 'landing',
  title: 'Introslider',
  type: 'document',
  fields: [
    defineField(
      {name: 'headline', type: 'string'},
      {name: 'subheadline', type: 'string'},

      {
        name: 'image',
        title: 'Image',
        type: 'object',
        fields: [
          {
            name: 'bild',
            title: 'Bild',
            type: 'image',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'alt',
            title: 'Alt',
            type: 'string',
            description:
              'Hier bitte eine kurze Bildbeschreibung für Screenreader und Suchmaschinen einfügen. Beispiel: »Three students perform during a concert, two playing instruments in the background, and one in the foreground playing a cello, gazing off to his left.«',
            validation: (Rule) => Rule.required(),
          },
        ],
      }
    ),
    orderRankField({type: 'landing'}),
  ],
  preview: {
    select: {
      title: 'image.title',
      media: 'image.image',
    },
    prepare(selection) {
      const title = selection.title
      const media = selection.image
      return {
        title: title,
        media: media,
      }
    },
  },
})
