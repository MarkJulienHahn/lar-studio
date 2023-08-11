import { useRef, useState, useEffect } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Image from "next/image";
import Link from "next/link";

const ExhibitionEntry = ({
  image,
  images,
  dimensions,
  name,
  title,
  start,
  end,
  right,
  slug,
  index
}) => {
  const [show, setShow] = useState(false);

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

  return (
    <div className={right ? "sectionRight" : "sectionLeft"}>
      <div className="imageWrapper">
        <Link
          href={{ pathname: `/galerie/${slug}`, query: { id: index } }}
        >
          <Image
            ref={imgRef}
            src={image}
            width={windowHeight * dimensions.aspectRatio}
            height={windowHeight}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          />
        </Link>
      </div>

      {!right ? (
        <div
          className={show ? "caption captionVisible" : "caption captionHidden"}
          style={{ top: y, left: imgRef.current?.clientWidth + 20 }}
        >
          <span style={{ display: "flex" }}>
            <div className="line"></div>
            <div>
              <div>{name}</div>
              <div className="exhibitionTitle">{title}</div>
              <div className="date">
                <span className="index">V</span>
                {start} — <span className="index">F</span>
                {end}
              </div>
            </div>
          </span>
        </div>
      ) : (
        <div
          className={show ? "caption captionVisible" : "caption captionHidden"}
          style={{ top: y, right: imgRef.current?.clientWidth + 40 }}
        >
          <span style={{ display: "flex" }}>
            <div>
              <div>{name}</div>
              <div className="exhibitionTitle">{title}</div>
              <div className="date">
                <span className="index">V</span>
                {start} — <span className="index">F</span>
                {end}
              </div>
            </div>
            <div className="line"></div>
          </span>
        </div>
      )}
    </div>
  );
};

export default ExhibitionEntry;
