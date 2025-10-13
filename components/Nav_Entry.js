import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";

import { usePathname } from "next/navigation";

const current = { fontStyle: "italic" };
const notCurrent = { fontStyle: "normal" };
const disabled = { cursor: "default" };

const Nav_Entry = ({ lable, url, comingSoon, setNav }) => {
  const pathname = usePathname();
  const [currPath, setCurrPath] = useState(false);
  const [hovered, setHovered] = useState(false);

  const addLine = () => setCurrPath(true);

  useEffect(() => {
    pathname.includes(lable) ? setTimeout(addLine, 500) : setCurrPath(false);
  }, [pathname]);

  // const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  return !comingSoon ? (
    <Link href={url} scroll={false} onClick={() => setNav(false)}>
      {/* <span className={styles.listIndex}>{alphabet[index]}</span> */}
      <span
        className={styles.listEntry}
        style={currPath || hovered ? current : notCurrent}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {lable}
      </span>
    </Link>
  ) : (
    <span
      className={`${styles.listEntry} ${styles.comingSoon}`}
      style={disabled}
    >
      {lable}
    </span>
  );
};

export default Nav_Entry;
