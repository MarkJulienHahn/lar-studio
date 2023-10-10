import { useState, useEffect } from "react";

import Image from "next/legacy/image";
import Link from "next/link";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { useSwiper } from "swiper/react";

const SwiperInnerSingleGalerie = ({
  image,
  blurDataURL,
  alt,
  triggerNext,
  triggerPrev,
  setTriggerNext,
  setTriggerPrev,
  setCurrentIndex,
}) => {
  // const [slideConfig, setSlideConfig] = useState({
  //   isBeginning: true,
  //   isEnd: false,
  // });

  const { windowWidth } = useWindowDimensions();

  const swiper = useSwiper();

  // console.log(windowWidth);

  // const changeIndex = () => setCurrentIndex(swiper.realIndex);

  // const resetTrigger = () => {
  //   setTriggerNext(false), setTriggerPrev(false);
  // };

  // useEffect(() => {
  //   changeIndex();
  // });

  // useEffect(() => {
  //   swiper.on("slideChange", (swipe) => {
  //     setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
  //   });
  //   changeIndex();
  // }, [swiper]);

  // useEffect(() => {
  //   triggerNext && swiper.slideNext();
  //   setTimeout(resetTrigger, 100);
  // }, [triggerNext]);

  // useEffect(() => {
  //   triggerPrev && swiper.slidePrev();
  //   setTimeout(resetTrigger, 100);
  // }, [triggerPrev]);

  const desktop = { objectFit: "contain", objectPosition: "left" };
  const mobile = {
    objectFit: "cover",
    objectPosition: "center",
    paddingRight: "40px",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 2 * var(--spaceMedium))",
        zIndex: "0",
      }}
    >
      <Image
        src={image}
        layout="fill"
        objectFit={windowWidth > 600 ? "contain" : "cover"}
        objectPosition="left"
        alt={alt}
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={windowWidth > 600 ? desktop : mobile}
      />
    </div>
  );
};

export default SwiperInnerSingleGalerie;
