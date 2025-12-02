import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "landing",
  title: "Introslider",
  type: "document",
  fields: [
    // defineField({ name: "headline", type: "string" }),
    // defineField({ name: "subheadline", type: "string" }),

    defineField({
      name: "image",
      title: "Image",
      type: "object",
      fields: [
        {
          name: "bild",
          title: "Bild",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description:
            "Hier bitte eine kurze Bildbeschreibung für Screenreader und Suchmaschinen einfügen. Beispiel: »Three students perform during a concert, two playing instruments in the background, and one in the foreground playing a cello, gazing off to his left.«",
        },
      ],
    }),
    orderRankField({ type: "landing" }),
  ],
  preview: {
    select: {
      title: "image.title",
      media: "image.bild",
    },
    prepare(selection) {
      const title = selection.title;
      const media = selection.media;
      return {
        title: title,
        media: media,
      };
    },
  },
});
