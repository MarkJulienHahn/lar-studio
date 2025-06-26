import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.divider(),
      S.listItem()
        .title("Startseite")
        .id("startseite")
        .child(S.document().schemaType("startseite").documentId("startseite")),
      orderableDocumentListDeskItem({
        type: "landing",
        title: "Slideshow",
        S,
        context,
      }),

      S.divider(),
      S.listItem()
        .title("Studio")
        .id("studio")
        .child(S.document().schemaType("studio").documentId("studio")),
      orderableDocumentListDeskItem({
        type: "arbeiten",
        title: "Arbeiten",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "marken",
        title: "Marken",
        S,
        context,
      }),
      S.listItem()
        .title("Showroom")
        .id("galerie")
        .child(S.document().schemaType("galerie").documentId("galerie")),
      S.listItem()
        .title("Prozess Intotext")
        .id("prozessIntro")
        .child(
          S.document().schemaType("prozessIntro").documentId("prozessIntro")
        ),
      orderableDocumentListDeskItem({
        type: "prozess",
        title: "Prozess",
        S,
        context,
      }),
      S.listItem()
        .title("Kontakt")
        .id("kontakt")
        .child(S.document().schemaType("kontakt").documentId("kontakt")),
      S.divider(),
      S.listItem()
        .title("Cookies")
        .id("cookies")
        .child(S.document().schemaType("cookies").documentId("cookies")),
      S.listItem()
        .title("Impressum")
        .id("impressum")
        .child(S.document().schemaType("impressum").documentId("impressum")),
      S.listItem()
        .title("Datenschutz")
        .id("datenschutz")
        .child(
          S.document().schemaType("datenschutz").documentId("datenschutz")
        ),
      S.listItem()
        .title("AGB")
        .id("agb")
        .child(S.document().schemaType("agb").documentId("agb")),
    ]);
