"use client";

import { useState } from "react";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../public/images/download.jpg";
import image2 from "../public/images/download-1.png";
import image3 from "../public/images/download-2.png";

import SwiperInner from "../components/SwiperInner";
import MouseDiv from "../components/MouseDiv";

const Homepage = ({ landing }) => {
  const [mouseLable, setMouseLable] = useState();

  return (
    <>
      <MouseDiv lable={mouseLable} />
      <Swiper loop={true}>
        {landing.map((bild, i) => (
          <SwiperSlide key={i}>
            <SwiperInner slug={bild.slug} image={bild.bild.url} setMouseLable={setMouseLable} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Homepage;
