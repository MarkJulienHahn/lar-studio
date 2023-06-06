"use client";

import Image from "next/image";

import Text from "./Text";
import ExhibitionEntry from "./ExhibitionEntry";

import img01 from "../public/images/03.webp";
import img02 from "../public/images/04.jpg";

const Galerie = ({ galerie }) => {
  console.log(galerie);

  return (
    <>
      <div className="galleryImage">
        <Image src={img01} width="1000" alt="" />
      </div>

      <Text
        header={galerie.beschreibung.headline}
        text={galerie.beschreibung.text}
        padding={30}
        index={3}
      />

      <div className="exhibitionsWrapper">
        {galerie.exhibitions.map((exhibition, i) => (
          <ExhibitionEntry
            key={i}
            image={exhibition.bild.bild.url}
            name={exhibition.name}
            title={exhibition.title}
            start={exhibition.start}
            end={exhibition.end}
            dimensions={exhibition.bild.bild.metadata.dimensions}
            right={i % 2 == 0 ? false : true}
          />
        ))}
      </div>
    </>
  );
};

export default Galerie;
