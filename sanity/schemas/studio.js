import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    defineField({
      name: 'introImage',
      title: 'Introbild',
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
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Überschrift',
          type: 'string',
        },
        {name: 'text', title: 'Text', type: 'blockContent'},
      ],
    }),
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
