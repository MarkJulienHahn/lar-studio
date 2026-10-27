import { getArbeiten } from "../../../sanity/sanity-utils";
import { SITE_URL, arbeitPath, isPublicArbeit } from "../arbeitenRoute";

// Route-Handler statt sitemap.js: In Next 13.4 wird sitemap.js nur beim Build erzeugt,
// hier wird die Sitemap regelmäßig neu aus dem CMS gebaut.
export const revalidate = 3600;

const pages = ["", "/studio", "/haeuser", "/retail", "/kontakt", "/impressum", "/datenschutz", "/agb"];

const escapeXml = (str) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET() {
  const arbeiten = await getArbeiten();

  const entries = [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...arbeiten.filter(isPublicArbeit).map((arbeit) => ({
      url: `${SITE_URL}${arbeitPath(arbeit)}`,
      lastModified: arbeit._updatedAt,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ url, lastModified }) =>
      `  <url>\n    <loc>${escapeXml(url)}</loc>${
        lastModified ? `\n    <lastmod>${lastModified}</lastmod>` : ""
      }\n  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
