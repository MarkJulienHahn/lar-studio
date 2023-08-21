import { getArbeiten } from "../../../sanity/sanity-utils";

import Arbeiten from "../../../components/Arbeiten";

export default async function Page() {
  const arbeiten = await getArbeiten();
  return (
    <main className="arbeitenPageWrapper">
      <Arbeiten arbeiten={arbeiten} />
    </main>
  );
}
