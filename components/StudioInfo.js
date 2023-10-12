import { useState, useRef, useEffect } from "react";
import PortableText from "react-portable-text";

import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperInnerSingleGalerie from "../components/SwiperInnerSingleGalerie";

import { useInView } from "framer-motion";

import StudioInfoTeamEntry from "./StudioInfoTeamEntry";

const StudioInfo = ({ text, quote, author, team, teamFoto, leistungen }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const [minHeight, setMinHeight] = useState();
  const [columnWidth, setColumnWidth] = useState();

  const { windowHeight } = useWindowDimensions();

  const ref = useRef();
  const columnRef = useRef();

  const isInView = useInView(ref, {
    margin: "0px 0px -500px 0px",
    once: true,
  });

  useEffect(() => {
    setMinHeight(windowHeight - 80),
      setColumnWidth(columnRef.current.clientWidth);
  }, []);

  return (
    <div className="studioWrapper" ref={ref} style={{ minHeight: minHeight }}>
      {imageIndex != null && (
        <div
          className="teamImageWrapper"
          style={{ height: windowHeight - 80, width: "calc(42.85% - 30px)" }}
        >
          <Image
            relative
            width={columnWidth}
            height={
              columnWidth /
              team[imageIndex].bild.asset.metadata.dimensions.aspectRatio
            }
            src={team[imageIndex].bild.asset.url}
            alt={team[imageIndex].bild.alt}
            blurDataURL={team[imageIndex].bild.asset.metadata.lqip}
            placeholder="blur"
            quality={1}
            priority={true}
          />
        </div>
      )}
      <div className="studioCol-3-7">
        <div
          ref={columnRef}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="studioHeadline">
            {/* <span className="index">1</span> */}
            <h1>Studio</h1>
          </div>
          <div className="line"></div>
          <div className="studioText">
            {text && <PortableText content={text} />}
            {quote && <PortableText content={quote} />}
            <div className="studioQuoteAuthor">{author}</div>
          </div>
        </div>
      </div>

      <div className="studioCol-1-7">
        <div
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          <div className="studioHeadline">
            {/* <span className="index">2</span> */}
            <h1>Team</h1>
          </div>
          <div className="line"></div>

          <div className="teamFoto">
            {columnWidth && (
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={1000}
              >
                {team.map((bild, i) => (
                  <SwiperSlide key={i}>
                    <SwiperInnerSingleGalerie
                      image={bild.bild.asset.url}
                      blurDataURL={bild.bild.asset.metadata?.lqip}
                      alt={"Team Foto of Studio Lar"}
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
              // <Image
              //   relative
              //   width={columnWidth}
              //   height={columnWidth / teamFoto.metadata.dimensions.aspectRatio}
              //   src={teamFoto.url}
              //   style={{ objectFit: "contain" }}
              //   alt={teamFoto.metadata.lqip}
              //   blurDataURL={teamFoto.metadata.lqip}
              //   placeholder="blur"
              // />
            )}
          </div>

          <div className="studioList">
            {team.map((person, i) => (
              <StudioInfoTeamEntry
                key={i}
                person={person}
                i={i}
                setImageIndex={setImageIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="studioCol-1-7">
        <div
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <div className="studioHeadline">
            {/* <span className="index">3</span> */}
            <h1>Leistungen</h1>
          </div>
          <div className="line"></div>
          <div className="studioList">
            {leistungen.map((leistung, i) => (
              <p key={i}>{leistung} </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioInfo;
