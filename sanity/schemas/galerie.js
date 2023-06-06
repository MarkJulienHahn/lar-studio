import { defineField, defineType } from "sanity";

export default defineType({
  name: "galerie",
  title: "Galerie",
  type: "document",
  fields: [
    defineField({
      name: "introImage",
      title: "Introbild",
      type: "object",
      fields: [
        {
          name: "bild",
          title: "Bild",
          type: "image",
          validation: (Rule) => Rule.required(),
        },

        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "Hier bitte eine kurze Bildbeschreibung für Screenreader und Suchmaschinen einfügen. Beispiel: »Three students perform during a concert, two playing instruments in the background, and one in the foreground playing a cello, gazing off to his left.«",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "headline",
          title: "Überschrift",
          type: "string",
        },
        { name: "text", title: "Text", type: "blockContent" },
      ],
    }),

    defineField({
      name: "exhibitions",
      title: "Exhibitions",
      type: "array",
      of: [
        {
          name: "exhibition",
          title: "Exhibition",
          type: "object",
          fields: [
            {
              name: "bild",
              title: "Bild",
              type: "image",
              validation: (Rule) => Rule.required(),
              fields: [{ name: "alt", title: "Alt", type: "string" }],
            },
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "beschreibung",
              title: "Beschreibung",
              type: "blockContent",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "bilder",
              title: "Bilder",
              type: "array",
              of: [
                {
                  name: "bilder",
                  title: "Bilder",
                  type: "object",
                  fields: [
                    {
                      name: "bild",
                      title: "bild",
                      type: "image",
                      fields: [
                        { name: "alt", title: "Alt", type: "string" },
                        {
                          name: "right",
                          title: "Rechtsbünding",
                          type: "boolean",
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: {
                      title: "bild.alt",
                      image: "bild.asset",
                    },
                    prepare({ title, image }) {
                      return {
                        title: title,
                        media: image,
                      };
                    },
                  },
                },
              ],
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                // include category if dataset is production
                source: (doc, context) => context.parent.title,
              },

              validation: (Rule) => Rule.required(),
            },
            {
              name: "start",
              title: "Vernissage",
              type: "date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "end",
              title: "Finissage",
              type: "date",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "image.title",
      media: "image.image",
    },

    prepare(selection) {
      const title = selection.title;
      const media = selection.image;
      return {
        title: title,
        media: media,
      };
    },
  },
});
