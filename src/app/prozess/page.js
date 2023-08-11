import { getProzess, getProzessIntro } from "../../../sanity/sanity-utils";

import Prozess from "../../../components/Prozess";

export default async function Page() {
  const prozess = await getProzess();
  const prozessIntro = await getProzessIntro();
  return (
    <main className="prozessPageWrapper">
      <Prozess prozess={prozess} prozessIntro={prozessIntro} />
    </main>
  );
}
