import React from "react";
import cartItems from "../../../constants/cartInitData";
import iconMinus from "../../../assets/icons/iconMinus.svg";
import iconPlus from "../../../assets/icons/iconPlus.svg";

function Product() {}

function ProductList() {
  const listItems = cartItems.map((item) => (
    <div
      class="product-container col col-12"
      data-count={item.quantity}
      data-price={item.price}
      key={item.id}
    >
      <img class="img-container" src={item.img} alt={item.name} />
      <div class="product-info">
        <div class="product-name">{item.name}</div>
        <div class="product-control-container">
          <div class="product-control">
            <img src={iconMinus} alt="iconMinus" class="product-action minus" />
            <span class="product-count">{item.quantity}</span>
            <img src={iconPlus} alt="iconPlus" class="product-action plus" />
          </div>
        </div>
        <div class="price">{item.price}</div>
      </div>
    </div>
  ));

  return (
    <section class="product-list col col-12" data-total-price="0">
      {listItems}
    </section>
  );
}

export default ProductList;
