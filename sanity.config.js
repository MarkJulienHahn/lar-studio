import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk"
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import {myStructure} from './deskStructure'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['settings'])

const config = defineConfig({
  projectId: "abp66gug",
  dataset: "production",
  title: 'studio-lar',
  apiVersion: "2023-06-01",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})

export default config