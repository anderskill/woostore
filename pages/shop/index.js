import React from "react";
import { fetchWooCommerceProducts } from "../../utils/wooCommerceApi";
import Products from "../../components/Products";
import styles from "../../styles/Shop.module.css";
import Header from "../../components/Header";

function ShopPage({ products }) {
  return (
    <div className={styles.container}>
      <Header />
      <Products products={products} />
    </div>
  );
}

export default ShopPage;

export const getStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
