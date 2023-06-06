"use client";

import Image from "next/image";
import ImageComponent from "./ImageComponent";

// import img01 from "../../../../public/images/02.png";
import Text from "./Text";

const SinglePageGallery = ({ contents, id }) => {
  const content = contents[0].exhibitions[id];
  return (
    <>
      <ImageComponent
        url={content.bild.bild.url}
        index={1}
        right={false}
        dimensions={content.bild.bild.metadata.dimensions}
        alt={content.bild.alt}
      />
      <Text
        header={content.title}
        text={content.beschreibung}
        padding={10}
        index={+id + 1}
        info={[
          { partner: content.infos?.partner },
          { licht: content.infos?.licht },
          { fotos: content.infos?.fotos },
          { jahr: content.infos?.jahr },
          { ort: content.infos?.ort },
        ]}
        dates={{ vernissage: content.start, finissage: content.end }}
      />

      <div>
        {content.bilder.map((bild, i) => (
          <ImageComponent
            key={i}
            url={bild.bild.asset.url}
            index={1}
            alt={bild.bild.alt}
            right={bild.bild.right}
            dimensions={bild.bild.asset.metadata.dimensions}
          />
        ))}
      </div>
    </>
  );
};

export default SinglePageGallery;
