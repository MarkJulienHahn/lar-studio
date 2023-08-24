import { getMarken } from "../../../../sanity/sanity-utils";
import SinglePageGallery from "../../../../components/SinglePageGallery";
import SinglePageGalleryMobile from "../../../../components/SinglePageGalleryMobile";

export default async function Page({ searchParams }) {
  const marken = await getMarken();

  return (
    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePageGallery marken={marken} id={searchParams.id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageGalleryMobile contents={marken} id={searchParams.id} />
      </main>
    </>
  );
}
