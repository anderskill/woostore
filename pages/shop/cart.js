import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CartTable from "../../components/CartTable";
import Link from "next/link";

const Cart = () => {
  const { cartItems, updateCartItemQuantity } = useContext(CartContext);
  const handleQuantityChange = (productId, quantity) => {
    updateCartItemQuantity(productId, quantity);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length <= 0 ? (
        <p>
          You have no items in your cart, add items from the
          <Link href="/shop">Shop</Link>
        </p>
      ) : (
        <CartTable
          items={cartItems}
          handleQuantityChange={handleQuantityChange}
        />
      )}
    </div>
  );
};

export default Cart;
