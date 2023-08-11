
import { getGalerie } from "../../../../sanity/sanity-utils";
import SinglePageGallery from "../../../../components/SinglePageGallery";

export default async function Page({ searchParams }) {
  const galerie = await getGalerie();

  return (
    <main className="arbeitenSinglePageWrapper">
      <SinglePageGallery contents={galerie} id={searchParams.id} />
    </main>
  );
}
