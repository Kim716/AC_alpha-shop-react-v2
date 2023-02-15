import React from "react";
import ProductList from "./ProductList";

function Cart() {
  return (
    <>
      {/* <!-- cart --> */}
      <section class="cart-container col col-lg-5 col-sm-12">
        <h3 class="cart-title">購物籃</h3>

        <ProductList />

        <section class="cart-info shipping col col-12">
          <div class="text">運費</div>
          <div class="price"></div>
        </section>
        <section class="cart-info total col col-12">
          <div class="text">小計</div>
          <div class="price"></div>
        </section>
      </section>
    </>
  );
}

export default Cart;
