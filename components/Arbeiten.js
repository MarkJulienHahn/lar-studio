"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageComponent from "./ImageComponent";

const Arbeiten = ({ arbeiten }) => {
  const location = useRouter();
  return (
    <AnimatePresence
      wait
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {arbeiten.map((arbeit, i) => (
          <ImageComponent
            key={i}
            lable={arbeit.title}
            url={arbeit.bild.asset.url}
            dimensions={arbeit.bild.asset.metadata.dimensions}
            index={i + 1}
            slug={arbeit.slug.current}
            blurDataURL={arbeit.bild.asset.metadata.lqip}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Arbeiten;
