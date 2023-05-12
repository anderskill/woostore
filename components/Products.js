import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";
import { sortProductsByCategories } from "../utils/sortProductsByCategorie";

function Products({ products }) {
  const sortedProducts = sortProductsByCategories(products);

  return (
    <div className={styles.container}>
      {sortedProducts.map(
        ({ price, sale_price, name, id, images, slug, sortedSlug }) => (
          <ProductCard
            price={price}
            salePrice={sale_price}
            name={name}
            key={id}
            src={images[0]?.src}
            slug={slug}
            href={sortedSlug}
          />
        )
      )}
    </div>
  );
}

export default Products;
