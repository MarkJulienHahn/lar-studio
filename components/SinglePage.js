"use client";

import Image from "next/image";
import ImageComponent from "./ImageComponent";

// import img01 from "../../../../public/images/02.png";
import Text from "./Text";

const SinglePage = ({ contents, id }) => {
  const content = contents[id - 1];
  return (
    <>
      <ImageComponent
        url={content.bild.asset.url}
        index={1}
        right={false}
        dimensions={content.bild.asset.metadata.dimensions}
        alt={content.bild.alt}
      />
      <Text
        header={content.title}
        text={content.text}
        padding={10}
        index={id}
        info={[
          { partner: content.infos?.partner },
          { licht: content.infos?.licht },
          { fotos: content.infos?.fotos },
          { jahr: content.infos?.jahr },
          { ort: content.infos?.ort },
        ]}
      />

      <div>
        {content.bilder.bilder.map((bild, i) => (
          <ImageComponent
            key={i}
            url={bild.bild.asset.url}
            index={1}
            right={bild.bild.bild.right}
            dimensions={bild.bild.asset.metadata.dimensions}
            alt={bild.bild.alt}
          />
        ))}
      </div>
    </>
  );
};

export default SinglePage;
