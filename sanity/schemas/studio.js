import { defineField, defineType } from "sanity";

export default defineType({
  name: "studio",
  title: "Studio",
  type: "document",
  fields: [
    defineField({
      name: "video",
      title: "Gibt es ein Introvideo?",
      type: "boolean",
    }),
    defineField({
      name: "vimeolink",
      title: "Vimeo-Video-ID",
      type: "string",
      hidden: ({document}) => !document?.video,
      description:
        "Hier einfach die Vimdeo-Video-ID eingeben. Das ist die (meist) 9-Stellige Ziffer, am Ende der Video-URL.«",
    }),
    defineField({
      name: "introImage",
      title: "Introbild",
      type: "object",
      hidden: ({document}) => document?.video,
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
      fields: [
        { name: "text", title: "Text", type: "blockContent" },
        { name: "quote", title: "Quote", type: "blockContent" },
        { name: "author", title: "Author", type: "string" },
      ],
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "array",
      of: [
        {
          name: "team",
          title: "Team",
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            {
              name: "bild",
              title: "Bild",
              type: "image",
            },
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "leistungen",
      title: "Leistungen",
      type: "array",
      of: [
        {
          name: "leistung",
          title: "Leistung",
          type: "string",
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
