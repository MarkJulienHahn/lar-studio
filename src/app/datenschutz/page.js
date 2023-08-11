import PortableText from "react-portable-text";
import { getDatenschutz } from "../../../sanity/sanity-utils";

export default async function Page() {
  const datenschutz = await getDatenschutz();
  return (
    <div className="pageWrapper">
      <div className="pageSection">
        <div className="studioHeadline">
          <span className="index">5</span>
          <h1>Datenschutz</h1>
        </div>
        <div className="line"></div>
        <div className="studioText">
          <PortableText content={datenschutz[0].datenschutz} />
        </div>
      </div>
    </div>
  );
}
