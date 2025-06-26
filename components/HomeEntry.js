import Image from "next/image";
import React from "react";
import PortableText from "react-portable-text";

const HomeEntry = ({ content }) => {
  return (
    <div className="homeEntryWrapper">
      <div className="homeEntryImage">
        <Image
          src={content?.bild.asset.url}
          alt={content?.bild.asset.url}
          width={600}
          height={600}
          responsive
        />
      </div>
      <div className="homeEntryText">
        <h1>{content?.headline}</h1>
        <div class="line"/>
        {content?.text && (
          <div>
            <PortableText content={content?.text} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeEntry;
