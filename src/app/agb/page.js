import PortableText from "react-portable-text";
import { getAGB } from "../../../sanity/sanity-utils";

export default async function Page() {
  const agb = await getAGB();
  return (
    <div className="pageWrapper">
      <div className="pageSection">
        <div className="studioHeadline">
          <span className="index">5</span>
          <h1>AGB</h1>
        </div>
        <div className="line"></div>
        <div className="studioText">
          <PortableText content={agb[0].agb} />
        </div>
      </div>
    </div>
  );
}
