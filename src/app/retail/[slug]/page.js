import { getArbeiten } from "../../../../sanity/sanity-utils";
import SinglePage from "../../../../components/SinglePage";
import SinglePageMobile from "../../../../components/SinglePageMobile";

export default async function Page({ searchParams }) {
  const arbeiten = await getArbeiten();
  const retail = arbeiten.filter((item) => item.kategorie === "retail");

  return (
    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePage contents={retail} id={searchParams.id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageMobile contents={retail} id={searchParams.id} />
      </main>
    </>
  );
}
