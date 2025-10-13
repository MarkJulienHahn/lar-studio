import { getArbeiten, getHaeuserIntro } from "../../../sanity/sanity-utils";

import Arbeiten from "../../../components/Arbeiten";
import PortableText from "react-portable-text";

export default async function Page() {
  const haeuserIntro = await getHaeuserIntro();
  const arbeiten = await getArbeiten();
  const haeuser = arbeiten.filter((item) => item.kategorie === "haeuser");

  console.log(haeuser)

  return (
    <main className="arbeitenPageWrapper">
      <section className="arbeitenIntrotext">
        <h1>Häuser</h1>
        <h2>{haeuserIntro.ueberschrift}</h2>
        <PortableText content={haeuserIntro.text} />
      </section>
      <Arbeiten arbeiten={haeuser} kategorie="haeuser" />
    </main>
  );
}
