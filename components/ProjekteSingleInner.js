import { useState, useEffect } from "react";

import Image from "next/legacy/image";
import { useInView } from "react-intersection-observer";

import { urlFor } from "../hooks/useImageUrlBuilder";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SwiperInnerSingle = ({ image, alt, blurDataURL, setCurrentIndex, i }) => {
  const [url, setUrl] = useState(null);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  const { windowHeight } = useWindowDimensions();

  useEffect(() => {
    inView && setCurrentIndex(i);
  }, [inView]);

  useEffect(() => {
    setUrl(
      urlFor(image)
        .height(Math.floor(windowHeight * 2))
        .quality(50)
        .format("jpg")
        .url()
    );
  }, []);

  return (
    <div
      style={{
        // width: "100vw",
        height: "calc(100vh - 2 * var(--spaceMedium))",
        // marginBottom: "var(--spaceMedium)",
        position: "relative",
        cursor: "none",
      }}
      ref={ref}
    >
      {url && (
        <Image
          src={url}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt={alt}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{ objectFit: "contain", objectPosition: "left" }}
          priority={i <= 10 ? true : false}
        />
      )}
    </div>
  );
};

export default SwiperInnerSingle;
