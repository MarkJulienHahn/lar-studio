import Image from "next/image";
import Link from "next/link";

import { useSwiper } from "swiper/react";

const SwiperInner = ({ slug, image, setMouseLable }) => {
  const swiper = useSwiper();

  console.log(slug?.slug.current);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        className="swiperPrev"
        onMouseEnter={() => setMouseLable("←")}
        onMouseLeave={() => setMouseLable(null)}
        onClick={() => swiper.slidePrev()}
      ></div>

      <Link href={`/arbeiten/${slug?.slug.current}`}>
        <div className="swiperLink"></div>
      </Link>

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
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default SwiperInner;
