import { getArbeiten } from "../../../../sanity/sanity-utils";
import SinglePage from "../../../../components/SinglePage";
import SinglePageMobile from "../../../../components/SinglePageMobile";

export default async function Page({ searchParams }) {
  const arbeiten = await getArbeiten();

  return (

    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePage contents={arbeiten} id={searchParams.id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageMobile contents={arbeiten} id={searchParams.id} />
      </main>
    </>
    
  );
}
