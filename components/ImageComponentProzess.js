import { useRef, useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import PortableText from "react-portable-text";

import Image from "next/image";
import Link from "next/link";

const ImageComponentProzess = ({
  url,
  dimensions,
  blurDataURL,
  lable,
  description,
  index,
  link,
  alt,
}) => {
  const [show, setShow] = useState(false);
  const [imageHeight, setImageHeight] = useState();

  const { windowHeight, windowWidth } = useWindowDimensions();
  const imgRef = useRef();

  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setY]);

  useEffect(() => {
    setImageHeight(windowHeight - 80);
  }, []);

  return (
    <>
      <div className={"sectionLeft"}>
        <div className="imageWrapper">
          {imageHeight &&
            (link ? (
              <a href={link} target="_blank">
                <Image
                  ref={imgRef}
                  src={url}
                  height={
                    dimensions.aspectRatio < 1
                      ? imageHeight
                      : imageHeight / dimensions.aspectRatio
                  }
                  width={
                    dimensions.aspectRatio < 1
                      ? imageHeight * dimensions.aspectRatio
                      : imageHeight
                  }
                  alt={alt}
                  blurDataURL={blurDataURL}
                  placeholder={"blur"}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                  priority={true}
                />
              </a>
            ) : (
              <Image
                ref={imgRef}
                src={url}
                height={
                  dimensions.aspectRatio < 1
                    ? imageHeight
                    : imageHeight / dimensions.aspectRatio
                }
                width={
                  dimensions.aspectRatio < 1
                    ? imageHeight * dimensions.aspectRatio
                    : imageHeight
                }
                alt={alt}
                blurDataURL={blurDataURL}
                placeholder={"blur"}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                priority={true}
              />
            ))}
        </div>

        {lable && (
          <>
            <div
              className={
                show ? "caption captionVisible" : "caption captionHidden"
              }
              style={{ top: y, left: imgRef.current?.clientWidth + 30 }}
            >
              <div className="line"></div>
              <div style={{ paddingLeft: "10px" }}>
                <span className="lable">{lable}</span>
                <span>
                  <br />
                  <br />
                  <PortableText content={description} />
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={"sectionMobile"}>
        <div className="imageWrapper">
          {imageHeight &&
            (link ? (
              <a href={link} target="_blank">
                <Image
                  src={url}
                  height={(windowWidth - 40) / dimensions.aspectRatio}
                  width={windowWidth - 40}
                  alt={alt}
                  blurDataURL={blurDataURL}
                  placeholder={"blur"}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              </a>
            ) : (
              <Image
                ref={imgRef}
                src={url}
                height={(windowWidth - 40) / dimensions.aspectRatio}
                width={windowWidth - 40}
                alt={alt}
                blurDataURL={blurDataURL}
                placeholder={"blur"}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              />
            ))}
        </div>
        <div className={"captionMobile"} style={{paddingLeft: "0"}}>
          <div>
            <span className="lable">{lable}</span>
          </div>
          <div className="line"></div>
          <span>
            <PortableText content={description} />
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageComponentProzess;
