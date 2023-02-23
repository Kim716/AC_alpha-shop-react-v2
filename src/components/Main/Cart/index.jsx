import React, { useState } from "react";
import ProductList from "./ProductList";
import cartItems from "../../../constants/cartInitData";

// 算出目前購物車商品的總價
const totalPrice = cartItems
  .map((item) => item.price * item.quantity)
  .reduce((sum, price) => sum + price, 0);

function CartInfo({ type, title, price }) {
  return (
    <section className={`cart-info ${type} col col-12`}>
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart() {
  const [total, setTotal] = useState(totalPrice);

  const handleChange = (sum) => {
    setTotal(sum);
  };
  return (
    <>
      {/* <!-- cart --> */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <ProductList
          onQuantityChange={handleChange}
          total={total}
          cartItems={cartItems}
        />
        <CartInfo type="shipping" title="運費" price={123} />
        <CartInfo type="total" title="小計" price={total} />
      </section>
    </>
  );
}

export default Cart;
