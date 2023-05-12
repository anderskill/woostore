import React from "react";
import styles from "../styles/RelatedProducts.module.css";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className={styles.container}>
      <h3>Related Products</h3>
      <ul className={styles.list}>
        {relatedProducts?.map((rp) => (
          <li key={rp.id} className={styles.listItem}>
            <ProductCard
              href={rp.slug.toString()}
              gender={rp?.categories[1]?.slug}
              category={rp?.categories[0]?.slug}
              passHref
              name={rp.name}
              price={rp.price}
              src={rp.images[0]?.src}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;
