import Kontakt from "../../../components/Kontakt";
import { getKontakt } from "../../../sanity/sanity-utils";

export default async function Page() {
  const kontakt = await getKontakt();
  return (
    <main className="studioPageWrapper">
      <Kontakt kontakt={kontakt} />
    </main>
  );
}
