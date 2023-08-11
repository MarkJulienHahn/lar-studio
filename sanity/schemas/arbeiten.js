import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "arbeiten",
  title: "Arbeiten",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    {
      name: "text",
      title: "Text",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "bild",
      title: "Preview Bild",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "infos",
      title: "Infos",
      type: "object",
      fields: [
        {
          name: "partner",
          title: "Partner",
          type: "string",
        },
        {
          name: "licht",
          title: "Licht",
          type: "string",
        },
        {
          name: "fotos",
          title: "Fotos",
          type: "string",
        },
        {
          name: "jahr",
          title: "Jahr",
          type: "string",
        },
        {
          name: "ort",
          title: "Ort",
          type: "string",
        },
      ],
    },

    {
      name: "bilder",
      title: "Bilder",
      type: "array",
      validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
              fields: [
                { name: "alt", title: "Alt", type: "string" },
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
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },

    orderRankField({ type: "arbeiten" }),
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
