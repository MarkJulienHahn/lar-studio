import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "prozess",
  title: "Inspiration",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    {
      name: "bild",
      title: "Bild",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    orderRankField({ type: "prozess" }),
  ],
  preview: {
    select: {
      title: "title",
      media: "vorschaubild.image",
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
