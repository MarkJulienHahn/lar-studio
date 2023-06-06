"use client";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";
import Text from ".//Text";

const Studio = ({ studio }) => {
  const { windowHeight } = useWindowDimensions();

  return (
    <>
      <div className="sectionLeft">
        <Image
          src={studio.bild.url}
          width={
            (windowHeight) * studio.bild.metadata.dimensions.aspectRatio
          }
          height={windowHeight}
          alt={studio.introImage.alt}
        />
      </div>

      <Text
        header={studio.beschreibung.headline}
        text={studio.beschreibung.text}
        padding={30}
        index={1}
      />
    </>
  );
};

export default Studio;
