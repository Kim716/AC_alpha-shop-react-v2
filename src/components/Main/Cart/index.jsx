import React, { useContext } from "react";

// Component
import ProductList from "./ProductList";

// Data
import CartContext from "../../../constants/CartContext";

function CartInfo({ type, title, price }) {
  return (
    <section className={`cart-info ${type} col col-12`}>
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart({ shipPrice, onQuantityChange }) {
  const cartItems = useContext(CartContext);

  // 算出目前購物車商品的總價
  const totalPrice =
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((sum, price) => sum + price, 0) + shipPrice;

  return (
    <>
      {/* <!-- cart --> */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <ProductList onQuantityChange={onQuantityChange} />
        <CartInfo type="shipping" title="運費" price={shipPrice} />
        <CartInfo type="total" title="小計" price={totalPrice} />
      </section>
    </>
  );
}

export default Cart;
