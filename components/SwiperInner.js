import Image from "next/image";
import Link from "next/link";

import { useSwiper } from "swiper/react";

const SwiperInner = ({ image, key, blurDataURL, setMouseLable }) => {
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
        src={image}
        fill
        alt="Studio Lar Icon"
        style={{ objectFit: "cover", objectPosition: "center" }}
        // placeholder="blur"
        // blurDataURL={blurDataURL}
        priority={true}
      />
    </div>
  );
};

export default SwiperInner;
