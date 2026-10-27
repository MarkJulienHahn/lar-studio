import { resolveArbeit, generateArbeitMetadata } from "../../arbeitenRoute";
import SinglePage from "../../../../components/SinglePage";
import SinglePageMobile from "../../../../components/SinglePageMobile";

export async function generateMetadata({ params }) {
  return generateArbeitMetadata(params.slug);
}

export default async function Page({ params }) {
  const { contents, id } = await resolveArbeit(params.slug);

  return (

    <>
      <main className="arbeitenSinglePageWrapper">
        <SinglePage contents={contents} id={id} />
      </main>
      <main className="arbeitenSinglePageWrapperMobile">
        <SinglePageMobile contents={contents} id={id} />
      </main>
    </>

  );
}
