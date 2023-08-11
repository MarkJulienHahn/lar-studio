"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "../components/Text";
import SwiperInnerSingle from "../components/SwiperInnerSingle";
import MouseDiv from "../components/MouseDiv";

const SinglePage = ({ contents, id }) => {
  const [mouseLable, setMouseLable] = useState();
  const [showInfo, setShowInfo] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerNext, setTriggerNext] = useState(false);
  const [triggerPrev, setTriggerPrev] = useState(false);

  const router = useRouter();

  const content = contents[id - 1];

  return (
    <>
      {showInfo && (
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
              { jahr: content.infos?.jahr },
              { ort: content.infos?.ort },
            ]}
            setShowInfo={setShowInfo}
          />
        </div>
      )}

      <MouseDiv lable={mouseLable} />
      <div className="controls">
        <p className="infobutton" onClick={() => setShowInfo(!showInfo)}>
          Info
        </p>
        <p>
          {currentIndex + 1} / {content.bilder.bilder.length}
        </p>
      </div>

      <div
        className="swiperControlsWrapper"
        style={{ width: "100vw", height: "100vh", position: "fixed" }}
      >
        <div
          className="swiperPrev"
          onMouseEnter={() => setMouseLable("←")}
          onMouseLeave={() => setMouseLable(null)}
          onClick={() => setTriggerPrev(true)}
        ></div>
        <div
          className="swiperBackLink"
          onMouseEnter={() => setMouseLable("×")}
          onMouseLeave={() => setMouseLable(null)}
          onClick={() => router.push("/projekte")}
        ></div>
        <div
          className="swiperNext"
          onMouseEnter={() => setMouseLable("→")}
          onMouseLeave={() => setMouseLable(null)}
          onClick={() => setTriggerNext(true)}
        ></div>
      </div>

      <Swiper loop={true} speed={1000}>
        {content.bilder.bilder.map((bild, i) => (
          <SwiperSlide key={i} style={{ cursor: "none" }}>
            <SwiperInnerSingle
              slug={bild.slug}
              image={bild.bild.asset.url}
              setMouseLable={setMouseLable}
              setCurrentIndex={setCurrentIndex}
              triggerNext={triggerNext}
              triggerPrev={triggerPrev}
              setTriggerNext={setTriggerNext}
              setTriggerPrev={setTriggerPrev}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SinglePage;
