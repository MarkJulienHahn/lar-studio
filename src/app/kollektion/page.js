import Image from "next/image";

import { getKollektion } from "../../../sanity/sanity-utils";

// import logo1 from "../../../public/images/logo01.png";
// import logo2 from "../../../public/images/logo02.png";
// import logo3 from "../../../public/images/logo03.png";
// import logo4 from "../../../public/images/logo04.png";
// import logo5 from "../../../public/images/logo05.png";
// import logo6 from "../../../public/images/logo06.png";
// import logo7 from "../../../public/images/logo07.png";
// import logo8 from "../../../public/images/logo08.png";
// import logo9 from "../../../public/images/logo09.png";
// import logo10 from "../../../public/images/logo10.png";
// import logo11 from "../../../public/images/logo11.png";
// import logo12 from "../../../public/images/logo12.png";
// import logo13 from "../../../public/images/logo13.png";
// import logo14 from "../../../public/images/logo14.png";
// import logo15 from "../../../public/images/logo15.png";
// import logo16 from "../../../public/images/logo16.png";
// import logo17 from "../../../public/images/logo12.png";

// const array = [
//   logo1,
//   logo2,
//   logo3,
//   logo4,
//   logo5,
//   logo6,
//   logo7,
//   logo8,
//   logo9,
//   logo10,
//   logo11,
//   logo12,
//   logo13,
//   logo14,
//   logo15,
//   logo16,
//   logo17,
// ];

export default async function Page() {
  const kollektion = await getKollektion();

  return (
    <main className="kollektionPageWrapper">
      {kollektion.map((logo, i) => (
        <div key={i}>
          <Image
            src={logo.bild.asset.url}
            width={180}
            height={200}
            style={{ cursor: "pointer", objectFit: "contain" }}
          />
        </div>
      ))}
    </main>
  );
}
