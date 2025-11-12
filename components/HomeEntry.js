import Image from "next/image";
import React from "react";
import PortableText from "react-portable-text";

const HomeEntry = ({ content, subContent }) => {
  return (
    <div className="homeEntryWrapper" style={{ alignItems: "flex-start" }}>
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
        <div className="homeEntryText__section">
          <h1>{content?.headline}</h1>
          <h2>{content?.subheadline}</h2>
          <div class="line" />
          {content?.text && (
            <div>
              <PortableText content={content?.text} />
            </div>
          )}
        </div>
        {subContent && (
          <div className="homeEntryText__section">
            <h1>{subContent?.headline}</h1>
            <h2>{subContent?.subheadline}</h2>
            <div class="line" />
            {subContent?.text && (
              <div>
                <PortableText content={subContent?.text} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeEntry;
