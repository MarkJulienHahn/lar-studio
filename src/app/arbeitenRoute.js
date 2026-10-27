import { notFound, redirect } from "next/navigation";
import { getArbeiten } from "../../sanity/sanity-utils";

export const SITE_URL = "https://www.larstudio.de";

// Pfad-Encoding wie im Browser: Leerzeichen -> %20, Komma bleibt lesbar
const encodeSlug = (slug) => encodeURIComponent(slug).replace(/%2C/g, ",");

const decodeSlug = (slug) => {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
};

// Kanonische URL eines Projekts, z.B. /haeuser/zeppelin
export const arbeitPath = (arbeit) =>
  `/${arbeit.kategorie}/${encodeSlug(arbeit.slug.current)}`;

export const isPublicArbeit = (arbeit) =>
  !arbeit.comingSoon && arbeit.slug?.current && arbeit.kategorie;

// Findet ein Projekt über den Slug statt über ?id=.
// Alte Links mit ?id= funktionieren weiter, der Parameter wird ignoriert.
// `id` ist die bisherige 1-basierte Position in der Liste (für Nummerierung und "nächstes Projekt").
export async function resolveArbeit(slug, kategorie) {
  const arbeiten = await getArbeiten();
  const contents = kategorie
    ? arbeiten.filter((item) => item.kategorie === kategorie)
    : arbeiten;
  const wanted = decodeSlug(slug);

  let index = contents.findIndex((item) => item.slug?.current === wanted);

  if (index === -1) {
    // z.B. /haeuser/Zeppelin -> /haeuser/zeppelin oder falsche Kategorie
    const match = arbeiten.find(
      (item) => item.slug?.current?.toLowerCase() === wanted.toLowerCase()
    );
    if (match && isPublicArbeit(match)) {
      redirect(kategorie ? arbeitPath(match) : `/projekte/${encodeSlug(match.slug.current)}`);
    }
    notFound();
  }

  const arbeit = contents[index];
  if (!isPublicArbeit(arbeit)) notFound();

  return { contents, arbeit, id: index + 1 };
}

export async function generateArbeitMetadata(slug, kategorie) {
  const { arbeit } = await resolveArbeit(slug, kategorie);
  return { alternates: { canonical: arbeitPath(arbeit) } };
}
