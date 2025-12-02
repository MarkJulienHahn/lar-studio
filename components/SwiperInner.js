import Image from "next/image";

import { useSwiper } from "swiper/react";
import { urlFor } from "../hooks/useImageUrlBuilder";

const SwiperInner = ({ image, setMouseLable }) => {
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
      <Image
        src={urlFor(image).quality(50).format("jpg").url()}
        fill
        alt="Studio Lar Icon"
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority={true}
      />
    </div>
  );
};

export default SwiperInner;
