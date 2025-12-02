"use client";

import { useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";
import StudioInfo from ".//StudioInfo";
import Footer from "./Footer";

const Studio = ({ studio }) => {
  const [imageHeight, setImageHeight] = useState();
  const [imageWidth, setImageWidth] = useState();
  const [windowAspectRatio, setWindowAspectRatio] = useState();
  const { windowHeight, windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImageHeight(windowHeight - 80);
    setImageWidth(windowWidth - 80);
    setWindowAspectRatio(imageWidth / imageHeight);
  });

  return (
    <>
      <div className="sectionLeft">
        {studio.video ? (
          <div
            className="vimeoContainer"
            style={{
              height:
                windowAspectRatio > 1.7777778
                  ? imageHeight - 80 * 0.5625
                  : imageWidth * 0.5625,
              width:
                windowAspectRatio > 1.7777778
                  ? imageHeight * 1.7777778 - 80
                  : imageWidth,
            }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${studio.vimeolink}?background=true`}
              width={
                windowAspectRatio > 1.7777778
                  ? imageHeight * 1.7777778 - 80
                  : imageWidth
              }
              height={
                windowAspectRatio > 1.7777778
                  ? imageHeight - 80 * 0.5625
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
              src={studio.bild.url}
              width={imageHeight * studio.bild.metadata.dimensions.aspectRatio}
              height={imageHeight}
              alt={studio.introImage.alt}
              // blurDataURL={studio.bild.asset.metadata.lqip}
              // placeholder="blur"
            />
          )
        )}
      </div>

      <div className="sectionLeftMobile">
        {studio.video ? (
          <div className="vimeoContainer">
            <iframe
              src={`https://player.vimeo.com/video/${studio.vimeolink}?background=true`}
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
              style={{ objectFit: "cover" }}
            />
          )
        )}
      </div>

      <StudioInfo
        headline={studio.headline}
        text={studio.beschreibung.text}
        quote={studio.beschreibung.quote}
        author={studio.beschreibung.author}
        team={studio.team}
        teamFoto={studio.teamFoto}
        leistungen={studio.leistungen}
      />
      <Footer />
    </>
  );
};

export default Studio;
