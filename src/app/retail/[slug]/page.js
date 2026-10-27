import { resolveArbeit, generateArbeitMetadata } from "../../arbeitenRoute";
import SinglePage from "../../../../components/SinglePage";
import SinglePageMobile from "../../../../components/SinglePageMobile";

export async function generateMetadata({ params }) {
  return generateArbeitMetadata(params.slug, "retail");
}

export default async function Page({ params }) {
  const { contents: retail, id } = await resolveArbeit(params.slug, "retail");

  return (
    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePage contents={retail} id={id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageMobile contents={retail} id={id} />
      </main>
    </>
  );
}
