"use client";

import { useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";

import ShowRoomInfo from "./ShowRoomInfo";

const Galerie = ({ galerie, marken }) => {
  const [imageHeight, setImageHeight] = useState();
  const { windowHeight, windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImageHeight(windowHeight - 80);
  }, [windowHeight]);

  return (
    <>
      <div className="sectionLeft">
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
      </div>

      <div className="sectionLeftMobile">
        {galerie.video ? (
          <div className="vimeoContainer">
            <iframe
              src={`https://player.vimeo.com/video/${galerie.vimeolink}?background=true`}
              width={1000}
              height={1000}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : (
          imageHeight && (
            <Image
              src={galerie.introImage.bild.url}
              width={windowWidth}
              height={windowWidth * 1.3333}
              alt={galerie.introImage.alt}
              blurDataURL={galerie.introImage.bild.metadata.lqip}
              placeholder="blur"
              style={{objectFit: "cover"}}
            />
          )
        )}
      </div>

      <ShowRoomInfo
        text={galerie.beschreibung.text}
        headline={galerie.beschreibung.headline}
        marken={marken}
        oeffnungszeiten={galerie.oeffnungszeiten}
      />
    </>
  );
};

export default Galerie;
