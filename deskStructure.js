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
      orderableDocumentListDeskItem({
        type: "arbeiten",
        title: "Arbeiten",
        S,
        context,
      }),
      S.listItem()
        .title("Häuser Introtext")
        .id("haeuserIntro")
        .child(
          S.document().schemaType("haeuserIntro").documentId("haeuserIntro")
        ),
      S.listItem()
        .title("Retail Introtext")
        .id("retailIntro")
        .child(
          S.document().schemaType("retailIntro").documentId("retailIntro")
        ),

      S.divider(),
      S.listItem()
        .title("Studio")
        .id("studio")
        .child(S.document().schemaType("studio").documentId("studio")),

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
