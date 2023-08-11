import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useSwiper } from "swiper/react";

const SwiperInnerSingle = ({
  image,
  triggerNext,
  triggerPrev,
  setTriggerNext, 
  setTriggerPrev,
  setCurrentIndex,
}) => {
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const swiper = useSwiper();

  const changeIndex = () => setCurrentIndex(swiper.realIndex);

  const resetTrigger = () => {
    setTriggerNext(false), setTriggerPrev(false);
  };

  useEffect(() => {
    changeIndex();
  });

  useEffect(() => {
    swiper.on("slideChange", (swipe) => {
      setSlideConfig({ isBeginning: swipe.isBeginning, isEnd: swipe.isEnd });
    });
    changeIndex();
  }, [swiper]);

  useEffect(() => {
    triggerNext && swiper.slideNext();
    setTimeout(resetTrigger, 100)
  }, [triggerNext]);

  useEffect(() => {
    triggerPrev && swiper.slidePrev();
    setTimeout(resetTrigger, 100)
  }, [triggerPrev]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Image
        src={image}
        fill
        alt="Studio Lar Icon"
        style={{ objectFit: "contain", objectPosition: "left" }}
      />
    </div>
  );
};

export default SwiperInnerSingle;
