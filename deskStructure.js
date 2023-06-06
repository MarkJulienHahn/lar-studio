import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const myStructure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'landing',
        title: 'Slideshow',
        S,
        context,
      }),

      S.divider(),
      S.listItem()
        .title('Studio')
        .id('studio')
        .child(S.document().schemaType('studio').documentId('studio')),
      orderableDocumentListDeskItem({
        type: 'arbeiten',
        title: 'Arbeiten',
        S,
        context,
      }),
      S.listItem()
        .title('Galerie')
        .id('galerie')
        .child(S.document().schemaType('galerie').documentId('galerie')),
      orderableDocumentListDeskItem({
        type: 'kollektion',
        title: 'Kollektion',
        S,
        context,
      }),
      S.listItem()
      .title('Kontakt')
      .id('kontakt')
      .child(S.document().schemaType('kontakt').documentId('kontakt')),
    ])
