import React from "react";
import styles from "../styles/CartHeader.module.css";

const CartHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <p>Product</p>
      </div>
      <div className={styles.secondContainer}>
        <p className={styles.text}>Price</p>
        <p className={styles.text}>Quantity</p>
        <p className={styles.text}>Total</p>
      </div>
    </div>
  );
};

export default CartHeader;
