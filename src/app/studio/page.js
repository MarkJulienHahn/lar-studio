import { getStudio } from "../../../sanity/sanity-utils";

import Studio from "../../../components/Studio";

export default async function Page() {
  const studio = await getStudio();
  return (
    <main className="studioPageWrapper">
      <Studio studio={studio[0]} />
    </main>
  );
}
