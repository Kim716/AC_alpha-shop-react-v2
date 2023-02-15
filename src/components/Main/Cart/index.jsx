import React from "react";
import ProductList from "./ProductList";

function CartInfo({ type, title, price }) {
  return (
    <section className={`cart-info ${type} col col-12`}>
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart() {
  return (
    <>
      {/* <!-- cart --> */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <ProductList />
        <CartInfo type="shipping" title="運費" price={123} />
        <CartInfo type="total" title="小計" price={123} />
      </section>
    </>
  );
}

export default Cart;
