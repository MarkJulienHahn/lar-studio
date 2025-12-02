import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "haeuserIntro",
  title: "Häuser Introtext",
  type: "document",
  fields: [
    {
      name: "ueberschrift",
      title: "Überschrift",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },

    orderRankField({ type: "arbeiten" }),
  ],
  preview: {
    prepare() {
      return {
        title: "Häuser Introtext",
      };
    },
  },
});
