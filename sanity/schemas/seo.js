import { defineField } from "sanity";

// SEO-Felder für Google. Ändern nichts an sichtbaren Texten oder der Gestaltung.
// Leere Felder -> bisherige Angaben werden weiterverwendet.
export const seoField = (hidden) =>
  defineField({
    name: "seo",
    title: "SEO (Google)",
    type: "object",
    hidden,
    options: { collapsible: true, collapsed: true },
    fields: [
      {
        name: "title",
        title: "SEO-Titel",
        type: "string",
        description:
          "Titel in den Google-Suchergebnissen und im Browser-Tab. Ideal: max. 60 Zeichen. Leer lassen = Standard wird verwendet.",
        validation: (Rule) =>
          Rule.max(60).warning("Länger als 60 Zeichen wird bei Google meist abgeschnitten."),
      },
      {
        name: "description",
        title: "Meta-Beschreibung",
        type: "text",
        rows: 3,
        description:
          "Kurzbeschreibung unter dem Titel in den Google-Suchergebnissen. Ideal: 120–160 Zeichen. Leer lassen = Standard wird verwendet.",
        validation: (Rule) =>
          Rule.max(160).warning("Länger als 160 Zeichen wird bei Google meist abgeschnitten."),
      },
    ],
  });
