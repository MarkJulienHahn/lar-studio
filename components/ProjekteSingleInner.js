import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import SanityImage from "./SanityImage";

const SwiperInnerSingle = ({
  image,
  alt,
  blurDataURL,
  dimensions,
  sizesPrefix,
  eager,
  setCurrentIndex,
  i,
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  useEffect(() => {
    inView && setCurrentIndex(i);
  }, [inView]);

  return (
    <div
      style={{
        // width: "100vw",
        height: "calc(100vh - 160px)",
        // marginBottom: "var(--spaceMedium)",
        position: "relative",
        cursor: "none",
      }}
      ref={ref}
    >
      <SanityImage
        src={image}
        fill
        alt={alt}
        blurDataURL={blurDataURL}
        objectFit="contain"
        objectPosition="left"
        originalWidth={dimensions?.width}
        // "contain" in voller Höhe: Breite ergibt sich aus dem Seitenverhältnis
        sizes={`${sizesPrefix}, min(100vw, calc((100vh - 160px) * ${dimensions?.aspectRatio.toFixed(3)}))`}
        eager={eager}
      />
    </div>
  );
};

export default SwiperInnerSingle;
