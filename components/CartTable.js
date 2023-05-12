import styles from "../styles/CartTable.module.css";
import Image from "next/image";
import QuantityCartButton from "./QuantityCartButton";
import HorizontalLine from "./HorizontalLine";

const CartTable = ({ items }) => {
  const totalPrice = items
    ?.reduce((total, item) => {
      return total + Number(item.quantity) * Number(item.price);
    }, 0)
    .toFixed(2);

  function calculateTotalPrice({ price, quantity }) {
    return (price * quantity).toFixed(2);
  }

  return (
    <div className={styles.container}>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className={styles.product}>
                <Image
                  src={item.image}
                  width={120}
                  height={120}
                  alt={`Image of: ${item.name}`}
                />
                <span>{item.name}</span>
              </td>
              <td>${item.price}</td>
              <td>
                <QuantityCartButton item={item} />
              </td>
              <td>{calculateTotalPrice(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <HorizontalLine />
      </div>
      <h3 className={styles.totalPrice}>Total: ${totalPrice}</h3>
    </div>
  );
};

export default CartTable;
