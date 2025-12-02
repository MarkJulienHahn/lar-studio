import { getArbeiten } from "../../../sanity/sanity-utils";

import Arbeiten from "../../../components/Arbeiten";

export default async function Page() {
  const arbeiten = await getArbeiten();
  const seletedWork = arbeiten.filter((item) => item.selectedWork === true);

  return (
    <main className="arbeitenPageWrapper">
      <Arbeiten arbeiten={seletedWork} />
    </main>
  );
}
