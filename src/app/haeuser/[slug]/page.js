import { resolveArbeit, generateArbeitMetadata } from "../../arbeitenRoute";
import SinglePage from "../../../../components/SinglePage";
import SinglePageMobile from "../../../../components/SinglePageMobile";

export async function generateMetadata({ params }) {
  return generateArbeitMetadata(params.slug, "haeuser");
}

export default async function Page({ params }) {
  const { contents: haeuser, id } = await resolveArbeit(params.slug, "haeuser");

  return (

    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePage contents={haeuser} id={id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageMobile contents={haeuser} id={id} />
      </main>
    </>

  );
}
