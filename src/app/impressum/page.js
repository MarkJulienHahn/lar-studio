import PortableText from "react-portable-text";
import { getImpressum } from "../../../sanity/sanity-utils";

export default async function Page() {
  const impressum = await getImpressum();
  return (
    <div className="pageWrapper">
      <div className="pageSection">
        <div className="studioHeadline">
          <span className="index">5</span>
          <h1>Impressum</h1>
        </div>
        <div className="line"></div>
        <div className="studioText">
          <PortableText content={impressum[0].kontakt} />
        </div>
      </div>
      <div className="pageSection">
        <div className="studioHeadline">
          <h1>Inhalt</h1>
        </div>
        <div className="line"></div>
        <div className="studioText">
          <PortableText content={impressum[0].impressum} />
        </div>
      </div>
    </div>
  );
}
