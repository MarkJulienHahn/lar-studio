"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PortableText from "react-portable-text";
import styles from "./Cookies.module.css";

const Cookies = ({ cookies }) => {
  const [translation, setTranslation] = useState("translateY(90vh)");
  const [seen, setSeen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const seenFromLocalStorage = localStorage.getItem("seen");
    if (seenFromLocalStorage) {
      setSeen(JSON.parse(seenFromLocalStorage));
    }
  }, []);

  const saveSeenToLocalStorage = (value) => {
    localStorage.setItem("seen", JSON.stringify(value));
  };

  const cookieResponse = () => {
    setSeen(true);
    saveSeenToLocalStorage(true);
  };

  const cookieResponseTimed = () => {
    setTranslation("translateY(100vh)");
    setTimeout(cookieResponse, 1000);
  };

  return (
    !seen &&
    !pathname.includes("admin") && (
      <div className={styles.cookiesWrapper} style={{ transform: translation }}>
        <div className={styles.cookiesLeft}>
          <div className={styles.headline}>
            <span className="index">0</span>
            <h1>Cookies</h1>{" "}
            <p
              onClick={
                translation == "translateY(90vh)"
                  ? () => setTranslation("translateY(0vh)")
                  : () => setTranslation("translateY(calc(100vh - 100px))")
              }
            >
              {translation == "translateY(calc(100vh - 100px))"
                ? "(weitere Infos)"
                : "(weniger Infos)"}
            </p>
          </div>

          <div
            style={
              translation == "translateY(0vh)"
                ? { opacity: "1" }
                : { opacity: "0" }
            }
            className={styles.textWrapper}
          >
            <div className="line"></div>
            <div className={styles.text}>
              <PortableText content={cookies[0].cookies} />
            </div>
          </div>
        </div>

        <div className={styles.cookiesRight}>
          <h1 onClick={cookieResponseTimed}>Akzeptieren</h1>
          <p>oder</p>
          <h1 onClick={cookieResponseTimed}>Ablehnen</h1>
        </div>
      </div>
    )
  );
};

export default Cookies;
