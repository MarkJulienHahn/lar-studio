"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { usePathname } from "next/navigation";

import Nav_Entry from "./Nav_Entry";

import styles from "./Nav.module.css";
import logo from "../public/LAR-icon.png";

const active = { opacity: 1, paddingTop: "0px" };
const inactive = {
  opacity: 0,
  pointerEvents: "none",
  paddingTop: "100px",
};

const pages = [
  { lable: "start", url: "/" },
  { lable: "lar studio", url: "/studio" },
  { lable: "häuser", url: "/haeuser" },
  { lable: "retail", url: "/retail" },
  { lable: "hideouts", comingSoon: true },
  { lable: "selected work", url: "/selected-work" },
  { space: true },
  { lable: "lar space", comingSoon: true },
  // { lable: "showroom", url: "/showroom" },
  // { lable: "inspiration", url: "/inspiration" },
  { lable: "kontakt", url: "/kontakt" },
];

const Nav = () => {
  const [nav, setNav] = useState(false);

  const pathname = usePathname();

  return (
    !pathname.includes("admin") && (
      <>
        <div className={styles.icon} onClick={() => setNav(!nav)}>
          <Image
            src={logo}
            width={110}
            height={55}
            alt="Studio Lar Icon"
            priority
            style={{ objectFit: "contain", objectPosition: "right top" }}
          />
        </div>{" "}
        <div className={styles.iconTablet} onClick={() => setNav(!nav)}>
          <Image
            src={logo}
            width={90}
            height={45}
            alt="Studio Lar Icon"
            priority
            style={{ objectFit: "contain", objectPosition: "right top" }}
          />
        </div>
        <div className={styles.iconMobile} onClick={() => setNav(!nav)}>
          <Image
            src={logo}
            width={70}
            height={35}
            alt="Studio Lar Icon"
            priority
            style={{ objectFit: "contain", objectPosition: "right top" }}
          />
        </div>
        <div className={styles.menu} style={nav ? active : inactive}>
          <div className={styles.close} onClick={() => setNav(!nav)}>
            close
          </div>
          <div className={styles.menuList}>
            {pages.map((entry, i) =>
              !entry.space ? (
                <Nav_Entry
                  key={i}
                  lable={entry.lable}
                  url={entry.url}
                  index={i}
                  slug={entry.slug}
                  setNav={setNav}
                  comingSoon={entry.comingSoon}
                />
              ) : (
                <div key={i} style={{ height: "1.5rem" }} />
              )
            )}
          </div>
        </div>
      </>
    )
  );
};

export default Nav;
