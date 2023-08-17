"use client";
import Link from "next/link";
import PortableText from "react-portable-text";
const Kontakt = ({ kontakt }) => {
  console.log(kontakt);
  return (
    <div className="kontaktTextWrapper">
      <div className="kontaktTextInner">
        <div>
          <div className="studioHeadline">
            {/* <span className="index">1</span> */}
            <h1>Kontakt</h1>
          </div>
          <div className="line"></div>
          <div className="studioText">
            <PortableText content={kontakt[0].kontakt} />
          </div>
        </div>
        <div className="kontaktLinks">
          <Link href="/impressum">
            <p>Impressum</p>
          </Link>
          <Link href="/datenschutz">
            <p>Datenschutz</p>
          </Link>
          <Link href="/agb">
            <p>AGB</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
