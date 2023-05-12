import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Header.module.css";
import { getCategoryLinks } from "../utils/getCategoryLinks";

function Header() {
  const router = useRouter();
  const str = router.asPath;
  const route = /[^/]*$/.exec(str)[0];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{route}</h1>
      <ul className={styles.categoriesList}>
        {getCategoryLinks(router.asPath)}
      </ul>
    </div>
  );
}

export default Header;
