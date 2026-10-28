import { getStudio } from "../../../sanity/sanity-utils";

import Studio from "../../../components/Studio";
import { pageMetadata } from "../seo";

export async function generateMetadata() {
  return pageMetadata("studio");
}

export default async function Page() {
  const studio = await getStudio();
  return (
    <main className="studioPageWrapper">
      <Studio studio={studio[0]} />
    </main>
  );
}
