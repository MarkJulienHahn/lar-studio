import { useState, useRef, useEffect } from "react";
import PortableText from "react-portable-text";

import Image from "next/image";

import { useInView } from "framer-motion";

import StudioInfoTeamEntry from "./StudioInfoTeamEntry";

const StudioInfo = ({ text, quote, author, team, leistungen }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const [minHeight, setMinHeight] = useState();
  const [columnWidth, setColumnWidth] = useState();

  const ref = useRef();
  const columnRef = useRef();

  const isInView = useInView(ref, {
    margin: "0px 0px -500px 0px", once: true
  });

  useEffect(() => {
    setMinHeight(ref.current.clientHeight),
      setColumnWidth(columnRef.current.clientWidth);
  }, []);

  return (
    <div className="studioWrapper" ref={ref} style={{ minHeight: minHeight }}>
      <div className="studioCol-3-7">
        {imageIndex != null ? (
          <div className="teamImageWrapper">
            <Image
              relative
              width={columnWidth}
              height={
                columnWidth /
                team[imageIndex].bild.asset.metadata.dimensions.aspectRatio
              }
              src={team[imageIndex].bild.asset.url}
              style={{ objectFit: "contain" }}
              alt={team[imageIndex].bild.alt}
              blurDataURL={team[imageIndex].bild.asset.metadata.lqip}
              placeholder="blur"
            />
          </div>
        ) : (
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
              <h1>Studio</h1>
            </div>
            <div className="line"></div>
            <div className="studioText">
              {text && <PortableText content={text} />}
              {quote && <PortableText content={quote} />}
              <div className="studioQuoteAuthor">{author}</div>
            </div>
          </div>
        )}
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
            <h1>Team</h1>
          </div>
          <div className="line"></div>
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
            <span className="index">3</span>
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
