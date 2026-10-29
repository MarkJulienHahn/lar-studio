import { urlFor } from "./useImageUrlBuilder";

// Bildbreiten fürs srcset: Der Browser wählt anhand von `sizes` und Pixeldichte
// die passende Größe, statt immer das Original in voller Auflösung zu laden.
// (next/image kann das hier nicht, weil `images.unoptimized` gesetzt ist.)
// Eigene Datei ohne "use client", damit auch Server-Komponenten (Preload) sie nutzen können.
const WIDTHS = [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840];

const sanityUrl = (src, width, quality) =>
  urlFor(src).width(width).quality(quality).auto("format").url();

export function sanityImageAttrs(src, { originalWidth, quality = 80 } = {}) {
  // Nie größer als das Original anfragen (Breite steht sonst auch in der Sanity-URL: …-1792x1792.jpg)
  const maxWidth = originalWidth || Number(src?.match(/-(\d+)x\d+\.\w+$/)?.[1]);
  const widths = maxWidth
    ? [...WIDTHS.filter((w) => w < maxWidth), maxWidth]
    : WIDTHS;

  return {
    src: sanityUrl(src, widths.find((w) => w >= 1920) || widths.at(-1), quality),
    srcSet: widths.map((w) => `${sanityUrl(src, w, quality)} ${w}w`).join(", "),
  };
}

// Startseiten-Slideshow: Bildschirm schmaler als das Bild -> "cover" füllt die Höhe,
// das Bild wird breiter als 100vw
export const coverSizes = (dimensions) =>
  dimensions
    ? `(max-aspect-ratio: ${dimensions.width}/${dimensions.height}) calc(100vh * ${dimensions.aspectRatio.toFixed(3)}), 100vw`
    : "100vw";
