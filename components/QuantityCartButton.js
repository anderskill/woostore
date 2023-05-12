import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/QuantityButton.module.css";
import { CartContext } from "../contexts/cartContext";

const QuantityCartButton = ({ item, addButton = false }) => {
  const [count, setCount] = useState(item.quantity);
  const { updateItemQuantity, removeItemFromCart } = useContext(CartContext);

  useEffect(() => {
    updateItemQuantity(item.id, count);
    if (count < 1) {
      removeItemFromCart(item.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function clickHandler({ target }) {
    if (target.name === "increase") {
      setCount((prevQuant) => prevQuant + 1);
    }
    if (target.name === "decrease") {
      setCount((prevQuant) => prevQuant - 1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <button className={styles.minus} name="decrease" onClick={clickHandler}>
          -
        </button>
        <input className={styles.input} value={item.quantity} type="text" />
        <button className={styles.plus} name="increase" onClick={clickHandler}>
          +
        </button>
      </div>
      {addButton && (
        <button className={styles.submit} onClick={onClick}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default QuantityCartButton;
