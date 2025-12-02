"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import TextMobile from "./TextMobile";

import Image from "next/image";
import Link from "next/link";

import useWindowDimensions from "../hooks/useWindowDimensions";

const SinglePageMobile = ({ contents, id }) => {
  const [nextId, setNextId] = useState(parseInt(id) + parseInt(1));
  const router = useRouter();
  const { windowWidth } = useWindowDimensions();

  const content = contents[id - 1];

  const swiperRef = useRef(null);

  return (
    <>
      <div className="mobileHeaderImage">
        <div className="mobileSwiperNavigation">
          <div
            className="mobileSwiperNavigationButton"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </div>
          <div
            className="mobileSwiperNavigationButton"
            onClick={() => swiperRef.current?.slideNext()}
          >
            →
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {content.bilder.bilder.map((bild, i) => (
            <SwiperSlide key={i} >
              <div className="mobileImageWrapper">
                <Image
                  src={bild.bild.asset.url}
                  alt="Studio Lar Image"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                  width={windowWidth - 40}
                  height={
                    (windowWidth - 40) /
                    bild.bild.asset.metadata.dimensions.aspectRatio
                  }
                  placeholder={"blur"}
                  blurDataURL={bild.bild.asset.metadata.lqip}
                  // Add onClick to go to next slide
                  onClick={() => swiperRef.current?.slideNext()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Image
          src={content.bild.asset.url}
          alt="Studio Lar Icon"
          style={{
            objectFit: "contain",
            objectPosition: "left",
            width: "100%",
          }}
          width={windowWidth - 40}
          height={
            (windowWidth - 40) /
            content.bild.asset.metadata.dimensions.aspectRatio
          }
        /> */}
      </div>

      <div className="infoWrapper">
        <TextMobile
          header={content.title}
          text={content.text}
          padding={10}
          index={id}
          info={[
            { partner: content.infos?.partner },
            { licht: content.infos?.licht },
            { fotos: content.infos?.fotos },
            { kunst: content.infos?.kunst },
            { jahr: content.infos?.jahr },
            { ort: content.infos?.ort },
          ]}
          length={contents.length}
        />
      </div>

      {/* {content.bilder.bilder.map((bild, i) => (
        <div key={i} style={{ paddingBottom: "16px" }}>
          <Image
            src={bild.bild.asset.url}
            alt="Studio Lar Icon"
            style={{
              objectFit: "contain",
              objectPosition: "left",
              width: "100%",
            }}
            width={windowWidth - 40}
            height={
              (windowWidth - 40) /
              bild.bild.asset.metadata.dimensions.aspectRatio
            }
            placeholder={"blur"}
            blurDataURL={bild.bild.asset.metadata.lqip}
          />
        </div>
      ))} */}

      <div className="mobileNavigation">
        <div onClick={() => router.push("/projekte")}>
          <div className="mobileNavigationInner">
            <span>{"<<"}</span>
            <p>zurück</p>
          </div>
        </div>
        <Link
          href={{
            pathname: `/projekte/${contents[id]?.slug.current}`,
            query: { id: nextId },
          }}
        >
          <div className="mobileNavigationInner">
            <p>nächstes Projekt</p> <span>{">>"}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SinglePageMobile;
