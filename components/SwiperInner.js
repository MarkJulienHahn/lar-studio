import { useSwiper } from "swiper/react";
import SanityImage from "./SanityImage";
import { coverSizes } from "../hooks/sanityImageAttrs";

const SwiperInner = ({ image, alt, dimensions, priority, eager, hold, setMouseLable }) => {
  const swiper = useSwiper();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        className="swiperPrev"
        onMouseEnter={() => setMouseLable("←")}
        onMouseLeave={() => setMouseLable(null)}
        onClick={() => swiper.slidePrev()}
      ></div>

      <div
        className="swiperNext"
        onMouseEnter={() => setMouseLable("→")}
        onMouseLeave={() => setMouseLable(null)}
        onClick={() => swiper.slideNext()}
      ></div>
      <SanityImage
        src={image}
        fill
        alt={alt || "LAR STUDIO"}
        objectFit="cover"
        objectPosition="center"
        originalWidth={dimensions?.width}
        sizes={coverSizes(dimensions)}
        priority={priority}
        eager={eager}
        hold={hold}
      />
    </div>
  );
};

export default SwiperInner;
