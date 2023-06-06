import { getGalerie } from "../../../sanity/sanity-utils";

import Galerie from "../../../components/Galerie";

export default async function Page() {
  const galerie = await getGalerie();
  return (
    <main className="galleryPageWrapper">
      <Galerie galerie={galerie[0]} />
    </main>
  );
}
