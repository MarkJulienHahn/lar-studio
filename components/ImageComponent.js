import { useRef, useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({
  url,
  dimensions,
  blurDataURL,
  lable,
  index,
  slug,
  alt,
  kleiner,
}) => {
  const [show, setShow] = useState(false);
  const [imageHeight, setImageHeight] = useState();

  const { windowHeight } = useWindowDimensions();
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
          {imageHeight && (
            <Link
              href={{ pathname: `/projekte/${slug}`, query: { id: index } }}
            >
              {!kleiner ? (
                <Image
                  ref={imgRef}
                  src={url}
                  height={imageHeight}
                  width={imageHeight * dimensions.aspectRatio}
                  alt={alt}
                  blurDataURL={blurDataURL}
                  placeholder={"blur"}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Image
                  ref={imgRef}
                  src={url}
                  height={imageHeight * 0.8}
                  width={imageHeight * 0.8  * dimensions.aspectRatio}
                  alt={alt}
                  blurDataURL={blurDataURL}
                  placeholder={"blur"}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Link>
          )}
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
              <span className="index">{index}</span>
              <span className="lable">{lable}</span>
            </div>
          </>
        )}
      </div>

      <div className={"sectionMobile"}>
        <div className="imageWrapper">
          {imageHeight && (
            <Link
              href={{ pathname: `/projekte/${slug}`, query: { id: index } }}
            >
              <Image
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
              />
            </Link>
          )}
        </div>
        <div className={"captionMobile"}>
          <div>
            <span className="index">{index}</span>
            <span className="lable">{lable}</span>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
