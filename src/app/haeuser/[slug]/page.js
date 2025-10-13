import { getArbeiten } from "../../../../sanity/sanity-utils";
import SinglePage from "../../../../components/SinglePage";
import SinglePageMobile from "../../../../components/SinglePageMobile";

export default async function Page({ searchParams }) {
  const arbeiten = await getArbeiten();
    const haeuser = arbeiten.filter((item) => item.kategorie === "haeuser");

  return (

    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePage contents={haeuser} id={searchParams.id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageMobile contents={haeuser} id={searchParams.id} />
      </main>
    </>
    
  );
}
