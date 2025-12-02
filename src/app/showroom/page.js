import { getGalerie } from "../../../sanity/sanity-utils";
import { getMarken } from "../../../sanity/sanity-utils";

import Galerie from "../../../components/Galerie";

export default async function Page() {
  const galerie = await getGalerie();
  const marken = await getMarken();
  return (
    <main className="galleryPageWrapper">
      <Galerie galerie={galerie[0]} marken={marken}/>
    </main>
  );
}
