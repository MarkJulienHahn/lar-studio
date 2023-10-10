"use client";

import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import SwiperInner from "../components/SwiperInner";
import MouseDiv from "../components/MouseDiv";

const Homepage = ({ landing }) => {
  const [mouseLable, setMouseLable] = useState();

  return (
    <div className="introOuter">
      <MouseDiv lable={mouseLable} />
      <div className="introInner">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          speed={1000}
        >
          {landing.map((bild, i) => (
            <SwiperSlide key={i}>
              <SwiperInner
                slug={bild.slug}
                image={bild.bild.url}
                alt={bild.alt}
                blurDataURL={bild.bild.metadata.lqip}
                setMouseLable={setMouseLable}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Homepage;
