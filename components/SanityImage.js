"use client";

import { useEffect, useState } from "react";

import { urlFor } from "../hooks/useImageUrlBuilder";

// Bildbreiten fürs srcset: Der Browser wählt anhand von `sizes` und Pixeldichte
// die passende Größe, statt immer das Original in voller Auflösung zu laden.
// (next/image kann das hier nicht, weil `images.unoptimized` gesetzt ist.)
const WIDTHS = [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840];

const sanityUrl = (src, width, quality) =>
  urlFor(src).width(width).quality(quality).auto("format").url();

const SanityImage = ({
  src,
  alt,
  originalWidth,
  sizes = "100vw",
  quality = 80,
  priority = false,
  eager = false,
  fill = false,
  blurDataURL,
  objectFit,
  objectPosition,
  style,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);

  // Nie größer als das Original anfragen
  const widths = originalWidth
    ? [...WIDTHS.filter((w) => w < originalWidth), originalWidth]
    : WIDTHS;

  return (
    <img
      {...rest}
      alt={alt}
      src={sanityUrl(src, widths.find((w) => w >= 1920) || widths.at(-1), quality)}
      srcSet={widths.map((w) => `${sanityUrl(src, w, quality)} ${w}w`).join(", ")}
      sizes={sizes}
      loading={priority || eager ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
      ref={(img) => img?.complete && setLoaded(true)}
      onLoad={() => setLoaded(true)}
      style={{
        ...(fill && {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          color: "transparent",
        }),
        objectFit,
        objectPosition,
        ...(blurDataURL &&
          !loaded && {
            backgroundImage: `url("${blurDataURL}")`,
            backgroundSize: objectFit || "cover",
            backgroundPosition: objectPosition || "0% 0%",
            backgroundRepeat: "no-repeat",
          }),
        ...style,
      }}
    />
  );
};

// Nach dem Seitenaufbau die übrigen Slides vorladen, damit beim Wechseln kein Bild fehlt.
// Nur wenn die Slideshow sichtbar ist: Desktop- und Mobilversion liegen beide im HTML.
export function usePreloadAfterLoad(ref) {
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    const start = () => setPreload(ref.current?.getClientRects().length > 0);
    if (document.readyState === "complete") return start();
    window.addEventListener("load", start);
    return () => window.removeEventListener("load", start);
  }, [ref]);

  return preload;
}

export default SanityImage;
