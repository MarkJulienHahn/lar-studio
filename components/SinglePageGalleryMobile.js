"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TextMobile from "./TextMobile";

import Image from "next/image";
import Link from "next/link";

import useWindowDimensions from "../hooks/useWindowDimensions";

const SinglePageMobile = ({ contents, id }) => {
  const [nextId, setNextId] = useState(parseInt(id) + parseInt(1));
  const router = useRouter();
  const { windowWidth } = useWindowDimensions();

  const content = contents[id - 1];

  return (
    <>
      <div className="mobileHeaderImage">
        <Image
          src={content.bild.asset.url}
          alt="Studio Lar Icon"
          style={{
            objectFit: "contain",
            objectPosition: "left",
            width: "100%",
          }}
          width={windowWidth - 40}
          height={
            (windowWidth - 40) /
            content.bild.asset.metadata.dimensions.aspectRatio
          }
        />
      </div>

      <div className="infoWrapper">
        <TextMobile
          header={content.title}
          text={content.text}
          padding={10}
          index={""}
          info={[
            { partner: content.infos?.partner },
            { licht: content.infos?.licht },
            { fotos: content.infos?.fotos },
            { kunst: content.infos?.kunst },
            { jahr: content.infos?.jahr },
            { ort: content.infos?.ort },
          ]}
          length={contents.length}
        />
      </div>

      {content.bilder.bilder.map((bild, i) => (
        <div key={i} style={{ paddingBottom: "16px" }}>
          <Image
            src={bild.bild.asset.url}
            alt="Studio Lar Icon"
            style={{
              objectFit: "contain",
              objectPosition: "left",
              width: "100%",
            }}
            width={windowWidth - 40}
            height={
              (windowWidth - 40) /
              bild.bild.asset.metadata.dimensions.aspectRatio
            }
            placeholder={"blur"}
            blurDataURL={bild.bild.asset.metadata.lqip}
          />
        </div>
      ))}

      <div className="mobileNavigation">
        <div onClick={() => router.push("/projekte")}>
          <div className="mobileNavigationInner">
            <span>{"<<"}</span>
            <p>zurück</p>
          </div>
        </div>
        <Link
          href={{
            pathname: `/showroom/${contents[id]?.slug.current}`,
            query: { id: nextId },
          }}
        >
          <div className="mobileNavigationInner">
            <p>nächste Marke</p> <span>{">>"}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SinglePageMobile;
