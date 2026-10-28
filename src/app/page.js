import { getLanding, getStartseite } from "../../sanity/sanity-utils";

import styles from "./page.module.css";
import Homepage from "../../components/Homepage";
import { pageMetadata } from "./seo";

export async function generateMetadata() {
  return pageMetadata("startseite");
}

export default async function Home() {
  const startseite = await getStartseite();
  const landing = await getLanding();

  return (
    <main className={styles.main}>
      <Homepage landing={landing} startseite={startseite} />
    </main>
  );
}
