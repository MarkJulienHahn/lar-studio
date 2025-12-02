import { getProzess, getProzessIntro } from "../../../sanity/sanity-utils";

import Inspiration from "../../../components/Inspiration";

export default async function Page() {
  const prozess = await getProzess();
  const prozessIntro = await getProzessIntro();
  return (
    <main className="prozessPageWrapper">
      <Inspiration prozess={prozess} prozessIntro={prozessIntro} />
    </main>
  );
}
