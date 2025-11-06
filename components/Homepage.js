"use client";

import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import SwiperInner from "../components/SwiperInner";
import MouseDiv from "../components/MouseDiv";
import HomeEntry from "./HomeEntry";
import Footer from "./Footer";

const Homepage = ({ landing, startseite }) => {
  const [mouseLable, setMouseLable] = useState();

  console.log(landing[0].bild.url);

  return (
    <>
      <div className="introOuter">
        <MouseDiv lable={mouseLable} />
        <div className="introInner">
          <div className="introHeadline">
            {startseite?.headline && <h1>{startseite?.headline}</h1>}
            {startseite?.subheadline && <h2>{startseite?.subheadline}</h2>}
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            speed={1000}
            lazy={false}
          >
            {landing.map(
              (bild, i) =>
                bild.bild?.url && (
                  <SwiperSlide key={i}>
                    <SwiperInner
                      slug={bild.slug}
                      image={bild.bild.url}
                      alt={bild.alt}
                      blurDataURL={bild.bild.metadata.lqip}
                      setMouseLable={setMouseLable}
                      key={i}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
      <div className="introBody">
        <HomeEntry content={startseite?.architektur} />
        <HomeEntry content={startseite?.design} />
        {/* <HomeEntry content={startseite?.raumpsychologie} /> */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
