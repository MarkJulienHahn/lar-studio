
import { getArbeiten } from "../../../../sanity/sanity-utils";
import SinglePage from "../../../../components/SinglePage";

export default async function Page({ searchParams }) {
  const arbeiten = await getArbeiten();

  return (
    <main className="arbeitenSinglePageWrapper">
      <SinglePage contents={arbeiten} id={searchParams.id} />
    </main>
  );
}
