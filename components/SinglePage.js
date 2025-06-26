"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Text from "../components/Text";
import ProjekteSingleInner from "../components/ProjekteSingleInner";
import MouseDiv from "../components/MouseDiv";
import Footer from "../components/Footer";

const SinglePage = ({ contents, id }) => {
  const [mouseLable, setMouseLable] = useState("×");
  const [showInfo, setShowInfo] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef(null);
  const router = useRouter();
  const content = contents[id - 1];

  return (
    <>
      <MouseDiv lable={mouseLable} />
      <div className="controls">
        <p className="infobutton" onClick={() => router.back()}>
          Zurück
        </p>
        <p>
          {currentIndex + 1} / {content.bilder.bilder.length}
        </p>
      </div>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Klickbereiche */}
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          onMouseEnter={() => setMouseLable("←")}
          onMouseLeave={() => setMouseLable(null)}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "50%",
            zIndex: 10,
            cursor: "none",
          }}
        />
        <div
          onClick={() => swiperRef.current?.slideNext()}
          onMouseEnter={() => setMouseLable("→")}
          onMouseLeave={() => setMouseLable(null)}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "50%",
            zIndex: 10,
            cursor: "none",
          }}
        />

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
        >
          <SwiperSlide>
            <div className="infoWrapper">
              <Text
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
                setShowInfo={setShowInfo}
                length={contents.length}
              />
            </div>
          </SwiperSlide>

          {content.bilder.bilder.map((bild, i) => (
            <SwiperSlide key={i}>
              <ProjekteSingleInner
                slug={bild.slug}
                image={bild.bild.asset.url}
                blurDataURL={bild.bild.asset.metadata.lqip}
                alt={bild.alt}
                i={i}
                setCurrentIndex={setCurrentIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
