import { getArbeiten, getRetailIntro } from "../../../sanity/sanity-utils";

import Arbeiten from "../../../components/Arbeiten";
import PortableText from "react-portable-text";

export default async function Page() {
  const retailIntro = await getRetailIntro();
  const arbeiten = await getArbeiten();
  const retail = arbeiten.filter((item) => item.kategorie === "retail");

  return (
    <main className="arbeitenPageWrapper">
      <section className="arbeitenIntrotext">
        <h1>Retail</h1>
        <h2>{retailIntro.ueberschrift}</h2>
        <PortableText content={retailIntro.text} />
      </section>
      <Arbeiten arbeiten={retail} kategorie={"retail"} />
    </main>
  );
}
