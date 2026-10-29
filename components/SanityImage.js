"use client";

import { useEffect, useState } from "react";

import { sanityImageAttrs } from "../hooks/sanityImageAttrs";

const SanityImage = ({
  src,
  alt,
  originalWidth,
  sizes = "100vw",
  quality = 80,
  priority = false,
  eager = false,
  hold = false,
  fill = false,
  blurDataURL,
  objectFit,
  objectPosition,
  style,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);

  const { src: fallbackSrc, srcSet } = sanityImageAttrs(src, { originalWidth, quality });

  return (
    <img
      {...rest}
      alt={alt}
      // hold: noch gar nicht laden (lazy reicht in der Slideshow nicht, Chrome lädt
      // Nachbar-Slides sonst sofort mit und bremst damit das erste Bild)
      src={hold ? undefined : fallbackSrc}
      srcSet={hold ? undefined : srcSet}
      sizes={hold ? undefined : sizes}
      loading={priority || eager ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
      ref={(img) => img?.complete && img.currentSrc && setLoaded(true)}
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
        ...(hold && { color: "transparent" }),
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
