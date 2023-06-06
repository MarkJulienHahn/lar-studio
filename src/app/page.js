import { getLanding } from "../../sanity/sanity-utils";

import styles from "./page.module.css";
import Homepage from "../../components/Homepage";

export default async function Home() {
  const landing = await getLanding();

  return (
    <main className={styles.main}>
      <Homepage landing={landing}/>
    </main>
  );
}
