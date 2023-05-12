import React from "react";
import styles from "../styles/CartItem.module.css";
import Image from "next/image";

const CartItem = ({ key, image, name, quantity, price }) => {
  return (
    <li className={styles.container} key={key}>
      <div className={styles.imageAndTitle}>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            width={120}
            height={120}
            alt={`Image of: ${name}`}
          />
        </div>
        <h4>{name}</h4>
      </div>
      <p>{price}</p>
      <p>{quantity}</p>
    </li>
  );
};

export default CartItem;
