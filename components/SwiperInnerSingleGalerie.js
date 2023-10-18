import Image from "next/legacy/image";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SwiperInnerSingleGalerie = ({
  image,
  blurDataURL,
  alt,
}) => {

  const { windowWidth } = useWindowDimensions();

  const desktop = { objectFit: "contain", objectPosition: "left" };
  const mobile = {
    objectFit: "cover",
    objectPosition: "center",
    paddingRight: "40px",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 2 * var(--spaceMedium))",
        zIndex: "0",
      }}
    >
      <Image
        src={image}
        layout="fill"
        objectFit={"contain"}
        objectPosition="left"
        alt={alt}
        // placeholder="blur"
        // blurDataURL={blurDataURL}
        style={windowWidth > 600 ? desktop : mobile}
      />
    </div>
  );
};

export default SwiperInnerSingleGalerie;
