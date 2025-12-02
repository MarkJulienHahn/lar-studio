import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "arbeiten",
  title: "Projekte",
  type: "document",
  fields: [
    defineField({
      name: "comingSoon",
      title: "Coming Soon",
      type: "boolean",
    }),
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kategorie",
      title: "Kategorie",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Häuser", value: "haeuser" },
          { title: "Retail", value: "retail" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "selectedWork",
      title: "Selected Work",
      type: "boolean",
      hidden: ({ parent }) => parent?.comingSoon === true,
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "blockContent",
      hidden: ({ parent }) => parent?.comingSoon === true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.comingSoon) {
            return true;
          }
          return value ? true : "Text ist erforderlich";
        }),
    }),
    defineField({
      name: "bild",
      title: "Preview Bild",
      type: "image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kleiner",
      title: "Previewbild: Kleines Querformat",
      type: "boolean",
      hidden: ({ parent }) => parent?.comingSoon === true,
    }),
    defineField({
      name: "infos",
      title: "Infos",
      type: "object",
      hidden: ({ parent }) => parent?.comingSoon === true,
      fields: [
        { name: "partner", title: "Partner", type: "string" },
        { name: "licht", title: "Licht", type: "string" },
        { name: "fotos", title: "Fotos", type: "string" },
        { name: "kunst", title: "Kunst", type: "string" },
        { name: "jahr", title: "Jahr", type: "string" },
        { name: "ort", title: "Ort", type: "string" },
      ],
    }),
    defineField({
      name: "bilder",
      title: "Bilder",
      type: "array",
      hidden: ({ parent }) => parent?.comingSoon === true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.comingSoon) {
            return true;
          }
          return value && value.length > 0 ? true : "Bilder sind erforderlich";
        }),
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
              fields: [{ name: "alt", title: "Alt", type: "string" }],
            },
          ],
          preview: {
            select: {
              title: "bild.alt",
              image: "bild.asset",
            },
            prepare({ title, image }) {
              return {
                title: title || "Bild",
                media: image,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      hidden: ({ parent }) => parent?.comingSoon === true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.comingSoon) {
            return true;
          }
          return value?.current ? true : "Slug ist erforderlich";
        }),
    }),
    orderRankField({ type: "arbeiten" }),
  ],
  preview: {
    select: {
      title: "title",
      media: "bild",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
});
