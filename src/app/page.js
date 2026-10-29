import { getLanding, getStartseite } from "../../sanity/sanity-utils";

import styles from "./page.module.css";
import Homepage from "../../components/Homepage";
import { pageMetadata } from "./seo";
import { sanityImageAttrs, coverSizes } from "../../hooks/sanityImageAttrs";

export async function generateMetadata() {
  return pageMetadata("startseite");
}

export default async function Home() {
  const startseite = await getStartseite();
  const landing = await getLanding();

  // Erstes Slideshow-Bild (LCP) schon im Seitenkopf anmelden, damit der Browser
  // es sofort lädt und nicht erst, wenn er die Slideshow im HTML erreicht
  const first = landing.find((bild) => bild.bild?.url)?.bild;
  const firstAttrs =
    first &&
    sanityImageAttrs(first.url, { originalWidth: first.metadata?.dimensions?.width });

  return (
    <main className={styles.main}>
      <link rel="preconnect" href="https://cdn.sanity.io" />
      {firstAttrs && (
        <link
          rel="preload"
          as="image"
          href={firstAttrs.src}
          imageSrcSet={firstAttrs.srcSet}
          imageSizes={coverSizes(first.metadata?.dimensions)}
          fetchpriority="high"
        />
      )}
      <Homepage landing={landing} startseite={startseite} />
    </main>
  );
}
