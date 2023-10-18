"use client";

import { useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";

import ShowRoomInfo from "./ShowRoomInfo";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperInnerSingleGalerie from "../components/SwiperInnerSingleGalerie";
import Footer from "./Footer";

const Galerie = ({ galerie, marken }) => {
  const [imageHeight, setImageHeight] = useState();
  const { windowHeight, windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImageHeight(windowHeight - 80);
  }, [windowHeight]);

  return (
    <>
      {/* <div className="sectionLeft">
        {galerie.video ? (
          <div
            className="vimeoContainer"
            style={{
              height:
                windowAspectRatio > 1.7777778
                  ? imageHeight
                  : imageWidth * 0.5625,
              width:
                windowAspectRatio > 1.7777778
                  ? imageHeight * 1.7777778
                  : imageWidth,
            }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${galerie.vimeolink}?background=true`}
              width={
                windowAspectRatio > 1.7777778
                  ? imageHeight * 1.7777778
                  : imageWidth
              }
              height={
                windowAspectRatio > 1.7777778
                  ? imageHeight
                  : imageWidth * 0.5625
              }
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          imageHeight && (
            <Image
              src={galerie.introImage.bild.url}
              width={
                imageHeight *
                galerie.introImage.bild.metadata.dimensions.aspectRatio
              }
              height={imageHeight}
              alt={galerie.introImage.alt}
              blurDataURL={galerie.introImage.bild.metadata.lqip}
              placeholder={"blur"}
            />
          )
        )}
      </div> */}

      <div className="sectionLeftSwiper">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          speed={1000}
        >
          {galerie.introSlider.map((bild, i) => (
            <SwiperSlide key={i}>
              <SwiperInnerSingleGalerie
                image={bild.bild.bild.url}
                blurDataURL={bild.bild.bild.metadata?.lqip}
                alt={bild.bild.alt}
                // setMouseLable={setMouseLable}
                // setCurrentIndex={setCurrentIndex}
                // triggerNext={triggerNext}
                // triggerPrev={triggerPrev}
                // setTriggerNext={setTriggerNext}
                // setTriggerPrev={setTriggerPrev}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="sectionLeftMobile">
        <Swiper
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          speed={1000}
        >
          {galerie.introSlider.map((bild, i) => (
            <SwiperSlide key={i}>
              <SwiperInnerSingleGalerie
                image={bild.bild.bild.url}
                blurDataURL={bild.bild.bild.metadata?.lqip}
                alt={bild.bild.alt}
                // setMouseLable={setMouseLable}
                // setCurrentIndex={setCurrentIndex}
                // triggerNext={triggerNext}
                // triggerPrev={triggerPrev}
                // setTriggerNext={setTriggerNext}
                // setTriggerPrev={setTriggerPrev}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <ShowRoomInfo
        text={galerie.beschreibung.text}
        headline={galerie.beschreibung.headline}
        marken={marken}
        oeffnungszeiten={galerie.oeffnungszeiten}
      />
      <Footer />
    </>
  );
};

export default Galerie;
