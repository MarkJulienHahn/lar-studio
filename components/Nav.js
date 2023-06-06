"use client";

import { useState } from "react";
import Image from "next/image";

import Nav_Entry from "./Nav_Entry";

import styles from "./Nav.module.css";
import logo from "../public/LAR-icon.png";

const active = { opacity: 1 };
const inactive = { opacity: 0, pointerEvents: "none" };

const pages = [
  { lable: "studio" },
  { lable: "arbeiten" },
  { lable: "galerie" },
  { lable: "kollektion" },
  { lable: "kontakt" },
];

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className={styles.icon} onClick={() => setNav(!nav)}>
        <Image src={logo} width={100} height={50} alt="Studio Lar Icon" />
      </div>
      <div className={styles.menu} style={nav ? active : inactive}>
        <div className={styles.close} onClick={() => setNav(!nav)}>
          X
        </div>
        <div className={styles.menuList}>
          {pages.map((entry, i) => (
            <Nav_Entry lable={entry.lable} index={i + 1} slug={entry.slug} setNav={setNav}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
