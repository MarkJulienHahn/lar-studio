"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { usePathname } from "next/navigation";

import Nav_Entry from "./Nav_Entry";

import styles from "./Nav.module.css";
import logo from "../public/LAR-icon.png";

const active = { opacity: 1 };
const inactive = { opacity: 0, pointerEvents: "none" };

const pages = [
  { lable: "studio" },
  { lable: "projekte" },
  { lable: "showroom" },
  { lable: "inspiration" },
  { lable: "kontakt" },
  { lable: "impressum" },
];

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });


  useEffect(() => {
    scrollPosition >= 10 && pathname == "/" && setNav(true);
  }, [scrollPosition]);

  useEffect(() => {
    scrollPosition >= 10 &&
      pathname == "/" &&
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scrollPosition]);

  return (
    !pathname.includes("admin") && (
      <>
        <div className={styles.icon} onClick={() => setNav(!nav)}>
          <Image
            src={logo}
            width={70}
            height={35}
            alt="Studio Lar Icon"
            priority
            style={{ objectFit: "contain", objectPosition: "right top" }}
          />
        </div>
        <div className={styles.iconMobile} onClick={() => setNav(!nav)}>
          <Image
            src={logo}
            width={50}
            height={25}
            alt="Studio Lar Icon"
            priority
            style={{ objectFit: "contain", objectPosition: "right top" }}
          />
        </div>
        <div className={styles.menu} style={nav ? active : inactive}>
          <div className={styles.close} onClick={() => setNav(!nav)}>
            ×
          </div>
          <div className={styles.menuList}>
            {pages.map((entry, i) => (
              <Nav_Entry
                key={i}
                lable={entry.lable}
                index={i}
                slug={entry.slug}
                setNav={setNav}
              />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Nav;
