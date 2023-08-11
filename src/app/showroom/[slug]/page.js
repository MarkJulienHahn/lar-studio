
import { getMarken } from "../../../../sanity/sanity-utils";
import SinglePageGallery from "../../../../components/SinglePageGallery";

export default async function Page({ searchParams }) {
  const marken = await getMarken();

  return (
    <main className="arbeitenSinglePageWrapper">
      <SinglePageGallery marken={marken} id={searchParams.id} />
    </main>
  );
}
