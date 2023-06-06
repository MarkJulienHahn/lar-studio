import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";

import { usePathname } from "next/navigation";

const current = { textDecoration: "line-through", pointerEvents: "none" };
const notCurrent = { textDecoration: "none" };

const Nav_Entry = ({ lable, index, setNav }) => {
  const pathname = usePathname();
  const [currPath, setCurrPath] = useState(false);

  const addLine = () => setCurrPath(true);

  useEffect(() => {
    pathname.includes(lable) ? setTimeout(addLine, 500) : setCurrPath(false);
  }, [pathname]);

  return (
    <Link href={`/${lable}`} onClick={() => setNav(false)}>
      <span className={styles.listIndex}>{index}</span>
      <span
        className={styles.listEntry}
        style={currPath ? current : notCurrent}
      >
        {lable}
      </span>
    </Link>
  );
};

export default Nav_Entry;
