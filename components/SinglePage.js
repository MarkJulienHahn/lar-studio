"use client";

import Image from "next/image";
import ImageComponent from "./ImageComponent";

// import img01 from "../../../../public/images/02.png";
import Text from "./Text";

const SinglePage = ({ arbeiten, id }) => {
  const arbeit = arbeiten[id - 1];

  console.log(arbeit);

  return (
    <>
      <ImageComponent
        url={arbeit.bild.asset.url}
        index={1}
        right={false}
        dimensions={arbeit.bild.asset.metadata.dimensions}
        alt={arbeit.bild.alt}
      />
      <Text
        header={arbeit.title}
        text={arbeit.text}
        padding={10}
        index={id}
        info={[
          { partner: arbeit.infos?.partner },
          { licht: arbeit.infos?.licht },
          { fotos: arbeit.infos?.fotos },
          { jahr: arbeit.infos?.jahr },
          { ort: arbeit.infos?.ort },
        ]}
      />

      <div>
        {arbeit.bilder.bilder.map((bild, i) => (
          <ImageComponent
            url={bild.bild.asset.url}
            index={1}
            right={bild.bild.bild.right}
            dimensions={bild.bild.asset.metadata.dimensions}
          />
        ))}
      </div>
    </>
  );
};

export default SinglePage;
