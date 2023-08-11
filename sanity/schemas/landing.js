import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "landing",
  title: "Introslider",
  type: "document",
  fields: [
    {
      name: "bild",
      title: "Bild",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    },

    orderRankField({ type: "landing" }),
  ],
  preview: {
    select: {
      title: "image.alt",
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
