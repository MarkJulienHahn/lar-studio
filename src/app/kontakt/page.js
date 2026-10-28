import Kontakt from "../../../components/Kontakt";
import { getKontakt } from "../../../sanity/sanity-utils";
import { pageMetadata } from "../seo";

export async function generateMetadata() {
  return pageMetadata("kontakt");
}

export default async function Page() {
  const kontakt = await getKontakt();
  return (
    <main className="studioPageWrapper">
      <Kontakt kontakt={kontakt} />
    </main>
  );
}
