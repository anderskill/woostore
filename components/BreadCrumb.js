import React from "react";
import Link from "next/link";
import styles from "../styles/BreadCrumbs.module.css";

const Breadcrumb = ({ p }) => {
  const gender = p?.categories[0]?.slug || "";
  const category = p?.categories[1]?.slug || "";

  return (
    <div className={styles.breadcrumb}>
      <span>Shop</span>
      <span>/</span>
      <Link href={`/shop/${gender}/${category}`} passHref>
        <a className={styles.categoryLink}>{gender}</a>
      </Link>
      {category && (
        <>
          <span>/</span>
          <Link href={`/shop/${category}`} passHref>
            <a className={styles.categoryLink}>{category}</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
