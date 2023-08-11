import React from "react";

const GalleryMarkeEntry = ({ marke, i, setImageIndex }) => {
  return (
    <p
      className="teamEntry"
      onMouseEnter={() => setImageIndex(i)}
      onMouseLeave={() => setImageIndex(null)}
      key={i}
    >
      {marke.name}
    </p>
  );
};

export default GalleryMarkeEntry;
