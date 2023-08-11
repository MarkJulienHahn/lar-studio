import { useState, useRef, useEffect } from "react";
import PortableText from "react-portable-text";

import Image from "next/image";

import { useInView } from "framer-motion";

import GalleryMarkeEntry from "./GalleryMarkeEntry";

const StudioInfo = ({ text, headline, marken, oeffnungszeiten }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const [columnWidth, setColumnWidth] = useState();

  const ref = useRef();
  const columnRef = useRef();

  const isInView = useInView(ref, {
    margin: "0px 0px -500px 0px",
    once: true,
  });

  useEffect(() => {
    setColumnWidth(columnRef.current.clientWidth);
  }, []);

  return (
    <div className="studioWrapper" style={{ minHeight: "100vh" }}>
      {imageIndex != null && (
        <div className="teamImageWrapper">
          <Image
            relative
            width={columnWidth}
            height={
              columnWidth /
              marken[imageIndex].bild.asset.metadata.dimensions.aspectRatio
            }
            src={marken[imageIndex].bild.asset.url}
            style={{ objectFit: "contain" }}
            alt={marken[imageIndex].bild.alt}
            blurDataURL={marken[imageIndex].bild.asset.metadata.lqip}
            placeholder={"blur"}
          />
        </div>
      )}

      <div className="studioCol-3-7" ref={ref}>
        <div
          ref={columnRef}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="studioHeadline">
            <span className="index">1</span>
            <h1>{headline}</h1>
          </div>
          <div className="line"></div>
          <div className="studioText">
            {text && <PortableText content={text} />}
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
            <span className="index">2</span>
            <h1>Marken</h1>
          </div>
          <div className="line"></div>
          <div className="studioList">
            {marken.map((marke, i) => (
              <GalleryMarkeEntry
                key={i}
                marke={marke}
                i={i}
                setImageIndex={setImageIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {oeffnungszeiten.text && (
        <div className="studioCol-1-7">
          <div
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
          >
            <div className="studioHeadline">
              <span className="index">3</span>
              <h1>{oeffnungszeiten.headline}</h1>
            </div>
            <div className="line"></div>
            <div className="studioText">
              <PortableText content={oeffnungszeiten.text} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioInfo;
