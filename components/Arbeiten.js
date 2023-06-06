"use client";

import ImageComponent from "./ImageComponent";
// import img01 from "../../../public/images/02.png";

const Arbeiten = ({ arbeiten }) => {

  return (
    <>
      {arbeiten.map((arbeit, i) => (
        <ImageComponent
          key={i}
          lable={arbeit.title}
          url={arbeit.bild.asset.url}
          dimensions={arbeit.bild.asset.metadata.dimensions}
          index={i+1}
          right={i % 2==0 ? false : true}
          slug={arbeit.slug.current}
        />
      ))}
    </>
  );
};

export default Arbeiten;
