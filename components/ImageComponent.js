import { useRef, useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({
  url,
  dimensions,
  lable,
  index,
  right,
  slug,
  alt,
}) => {
  const [show, setShow] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);

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
    setImgWidth(
      dimensions.aspectRatio < 1
        ? windowHeight * dimensions.aspectRatio
        : windowHeight * dimensions.aspectRatio * 0.75
    );
  }, []);

  console.log(right);

  return (
    <div className={right ? "sectionRight" : "sectionLeft"}>
      <div className="imageWrapper">
        {slug ? (
          <Link
            href={{ pathname: `/arbeiten/${slug}`, query: { id: index } }}
            // as={`/arbeiten/${slug}`}
          >
            <Image
              ref={imgRef}
              src={url}
              width={imgWidth}
              height={imgWidth / dimensions.aspectRatio}
              alt={alt}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ cursor: "pointer" }}
            />
          </Link>
        ) : (
          <Image
            ref={imgRef}
            src={url}
            width={imgWidth}
            height={imgWidth / dimensions.aspectRatio}
            alt={alt}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          />
        )}
      </div>

      {lable && (
        <>
          {!right ? (
            <div
              className={
                show ? "caption captionVisible" : "caption captionHidden"
              }
              style={{ top: y, left: imgRef.current?.clientWidth + 100 }}
            >
              <div className="line"></div>
              <span className="index">{index}</span>
              <span>{lable}</span>
            </div>
          ) : (
            <div
              className={
                show ? "caption captionVisible" : "caption captionHidden"
              }
              style={{ top: y, right: imgRef.current?.clientWidth + 125 }}
            >
              <span className="index">{index}</span>
              <span>{lable}</span>
              <div className="line"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageComponent;
