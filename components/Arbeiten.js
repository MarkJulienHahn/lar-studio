"use client";

import { useEffect } from "react";

import Footer from "./Footer";
import ImageComponent from "./ImageComponent";

// Zurück aus einem Projekt: Scrollposition selbst wiederherstellen. Die Projektbilder
// erscheinen erst nach dem Mounten, die Wiederherstellung des Browsers landet sonst
// auf der noch leeren Seite am Footer und bleibt dort.
const scrollKey = () => `scroll:${window.location.pathname}`;
let cameBack = false;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => (cameBack = true));
}

const restoreScroll = (y) => {
  let tries = 0;
  const step = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max >= y || tries++ > 60) return window.scrollTo(0, y);
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const Arbeiten = ({ arbeiten, kategorie }) => {
  useEffect(() => {
    const saved = sessionStorage.getItem(scrollKey());
    if (cameBack && saved !== null) restoreScroll(Number(saved));
    cameBack = false;

    // Position merken, bevor ein Projekt geöffnet wird
    const saveScroll = (e) => {
      if (e.target.closest("a")) {
        sessionStorage.setItem(scrollKey(), String(window.scrollY));
      }
    };
    document.addEventListener("click", saveScroll, true);
    return () => document.removeEventListener("click", saveScroll, true);
  }, []);

  return (
    <>
      {arbeiten.map((arbeit, i) => (
        <ImageComponent
          key={i}
          i={i}
          lable={arbeit.title}
          url={arbeit.bild.asset.url}
          kategorie={kategorie}
          dimensions={arbeit.bild.asset.metadata.dimensions}
          index={i + 1}
          slug={arbeit.slug?.current}
          blurDataURL={arbeit.bild.asset.metadata.lqip}
          kleiner={arbeit.kleiner}
          length={arbeiten.length}
          alt={arbeit.bild.alt}
          comingSoon={arbeit.comingSoon}
        />
      ))}
      <div className="footerMobileWrapper">

        <Footer />
      </div>
    </>
  );
};

export default Arbeiten;
