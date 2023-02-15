import React from "react";
import cartItems from "../../../constants/cartInitData";
import iconMinus from "../../../assets/icons/iconMinus.svg";
import iconPlus from "../../../assets/icons/iconPlus.svg";

function Product() {}

function ProductList() {
  const listItems = cartItems.map((item) => (
    <div
      className="product-container col col-12"
      data-count={item.quantity}
      data-price={item.price}
      key={item.id}
    >
      <img className="img-container" src={item.img} alt={item.name} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img
              src={iconMinus}
              alt="iconMinus"
              className="product-action minus"
            />
            <span className="product-count">{item.quantity}</span>
            <img
              src={iconPlus}
              alt="iconPlus"
              className="product-action plus"
            />
          </div>
        </div>
        <div className="price">{item.price}</div>
      </div>
    </div>
  ));

  return (
    <section className="product-list col col-12" data-total-price="0">
      {listItems}
    </section>
  );
}

export default ProductList;
