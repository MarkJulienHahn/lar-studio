import { useRef, useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { urlFor } from "../hooks/useImageUrlBuilder";

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
  length,
  kleiner,
  i,
}) => {
  const [show, setShow] = useState(false);
  const [imageHeight, setImageHeight] = useState();
  const [URL, setUrl] = useState(null);

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
    setUrl(
      urlFor(url)
        .height(Math.floor(windowHeight * 1.5))
        .quality(50)
        .format("jpg")
        .url()
    );
  }, []);

  return (
    <>
      <div className={"sectionLeft"}>
        <div className="imageWrapper">
          {imageHeight && URL && (
            <Link
              href={{ pathname: `/projekte/${slug}`, query: { id: index } }}
              scroll={false}
              shallow={true}
            >
              {/* <div
                style={{ height: "100vh", width: "100px", background: "blue" }}
              ></div> */}
              {!kleiner ? (
                <Image
                  ref={imgRef}
                  src={URL}
                  height={imageHeight * 0.5}
                  width={imageHeight * 0.5 * dimensions.aspectRatio}
                  alt={alt ? alt : "placeholder"}
                  blurDataURL={blurDataURL}
                  placeholder={"blur"}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                  priority={i <= 2 ? true : false}
                />
              ) : (
                <Image
                  ref={imgRef}
                  src={URL}
                  height={imageHeight * 0.5}
                  width={imageHeight * 0.5 * dimensions.aspectRatio}
                  alt={alt ? alt : "placeholder"}
                  blurDataURL={blurDataURL}
                  placeholder={"blur"}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                  priority={i <= 2 ? true : false}
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
              <span className="index">{length - index + 1}</span>
              <span className="lable">{lable}</span>
            </div>
          </>
        )}
      </div>

      <div className={"sectionMobile"}>
        <div className="imageWrapper">
          {imageHeight && URL && (
            <Link
              href={{ pathname: `/projekte/${slug}`, query: { id: index } }}
              scroll={false}
            >
              <Image
                src={URL}
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
            <span className="index">{length - index + 1}</span>
            <span className="lable">{lable}</span>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
