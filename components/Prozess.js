"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageComponentProzess from "./ImageComponentProzess";
import PortableText from "react-portable-text";

const Prozess = ({ prozess, prozessIntro }) => {
  const location = useRouter();
  console.log(prozessIntro[0].prozessIntro)

  return (
    <AnimatePresence wait onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="prozessTextWrapper">
          <div className="studioHeadline">
            <span className="index">1</span>
            <h1>Prozess</h1>
          </div>
          <div className="line"></div>
          <div className="studioText">
            <PortableText content={prozessIntro[0].prozessIntro} />
          </div>
        </div>

        {prozess.map((eintrag, i) => (
          <ImageComponentProzess
            key={i}
            lable={eintrag.title}
            description={eintrag.beschreibung}
            link={eintrag.link}
            url={eintrag.bild.asset.url}
            dimensions={eintrag.bild.asset.metadata.dimensions}
            index={i + 1}
            blurDataURL={eintrag.bild.asset.metadata.lqip}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Prozess;
