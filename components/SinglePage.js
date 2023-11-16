"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Text from "../components/Text";
import ProjekteSingleInner from "../components/ProjekteSingleInner";
import MouseDiv from "../components/MouseDiv";
import Footer from "../components/Footer";

const SinglePage = ({ contents, id }) => {
  const [mouseLable, setMouseLable] = useState("×");
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
              { kunst: content.infos?.kunst },
              { jahr: content.infos?.jahr },
              { ort: content.infos?.ort },
            ]}
            setShowInfo={setShowInfo}
            length={contents.length}
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
          className="swiperBackLink"
          onMouseEnter={() => setMouseLable("×")}
          onMouseLeave={() => setMouseLable(null)}
          onClick={() => router.back()}
        ></div>
      </div>

      {content.bilder.bilder.map((bild, i) => (
        <ProjekteSingleInner
          slug={bild.slug}
          image={bild.bild.asset.url}
          blurDataURL={bild.bild.asset.metadata.lqip}
          alt={bild.alt}
          i={i}
          setCurrentIndex={setCurrentIndex}
        />
      ))}

      <Footer />

      {/* <Swiper loop={true} speed={1000}>
        {content.bilder.bilder.map((bild, i) => (
          <SwiperSlide key={i} style={{ cursor: "none" }}>
            <SwiperInnerSingle
              slug={bild.slug}
              image={bild.bild.asset.url}
              blurDataURL={bild.bild.asset.metadata.lqip}
              alt={bild.alt}
              setMouseLable={setMouseLable}
              setCurrentIndex={setCurrentIndex}
              triggerNext={triggerNext}
              triggerPrev={triggerPrev}
              setTriggerNext={setTriggerNext}
              setTriggerPrev={setTriggerPrev}
              i={i}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
};

export default SinglePage;
