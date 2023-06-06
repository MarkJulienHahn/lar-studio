import {defineField, defineType} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'

export default defineType({
  name: 'kollektion',
  title: 'Kollektion',
  type: 'document',
  fields: [
    defineField({
        name: "title",
        title: "Titel",
        type: "string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vorschaubild',
      title: 'Vorschaubild',
      type: 'object',
      fields: [
        {
          name: 'bild',
          title: 'Bild',
          type: 'image',
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
    }),

    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {source: 'title'},
        validation: (Rule) => Rule.required(),
      }),

    orderRankField({type: 'kollektion'}),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'vorschaubild.image'
    },
    prepare(selection) {
      const title = selection.title
      const media = selection.image
      return {
        title: title,
        media: media
      }
    },
  },
})
