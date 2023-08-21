"use client";

import ImageComponent from "./ImageComponent";

const Arbeiten = ({ arbeiten }) => {

  return (
    <div style={{ minHeight: "10000px" }}>
      {arbeiten.map((arbeit, i) => (
        <ImageComponent
          key={i}
          lable={arbeit.title}
          url={arbeit.bild.asset.url}
          dimensions={arbeit.bild.asset.metadata.dimensions}
          index={i + 1}
          slug={arbeit.slug.current}
          blurDataURL={arbeit.bild.asset.metadata.lqip}
          kleiner={arbeit.kleiner}
          length={arbeiten.length}
          alt={arbeit.bild.alt}
        />
      ))}
    </div>
  );
};

export default Arbeiten;
