import { getSeo } from "../../sanity/sanity-utils";

export const DEFAULT_TITLE = "LAR STUDIO";
export const DEFAULT_DESCRIPTION = "Architecture, Design and Products";

// SEO-Felder aus dem CMS; leere Felder -> bisherige Angaben
export const seoMetadata = (seo, fallbackTitle = DEFAULT_TITLE) => ({
  title: seo?.title?.trim() || fallbackTitle,
  description: seo?.description?.trim() || DEFAULT_DESCRIPTION,
});

export async function pageMetadata(type) {
  return seoMetadata(await getSeo(type));
}
