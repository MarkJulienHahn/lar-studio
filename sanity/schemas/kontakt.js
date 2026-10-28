import {defineField, defineType} from 'sanity'
import { seoField } from "./seo";

export default defineType({
  name: 'kontakt',
  title: 'Kontakt',
  type: 'document',
  fields: [
    defineField({
      name: 'kontakt',
      title: 'Kontakt',
      type: 'blockContent',
    }),
    seoField(),
  ],
})
