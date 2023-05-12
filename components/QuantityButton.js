import React from "react";
import styles from "../styles/QuantityButton.module.css";

const QuantityButton = ({
  onClick,
  quantity,
  clickHandler,
  addButton = false,
  id,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <button
          className={styles.minus}
          id={id}
          name="decrease"
          onClick={clickHandler}
        >
          -
        </button>
        <input className={styles.input} readOnly value={quantity} type="text" />
        <button
          className={styles.plus}
          id={id}
          name="increase"
          onClick={clickHandler}
        >
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

export default QuantityButton;
