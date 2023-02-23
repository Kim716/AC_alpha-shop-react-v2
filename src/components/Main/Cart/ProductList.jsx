import React, { useState } from "react";
// import cartItems from "../../../constants/cartInitData";
import iconMinus from "../../../assets/icons/iconMinus.svg";
import iconPlus from "../../../assets/icons/iconPlus.svg";

function Item({ item, onQuantityChange, total }) {
  const [count, setCount] = useState(item.quantity);
  const [price, setPrice] = useState(item.price * item.quantity);

  const handleMinusClick = (e) => {
    setCount((c) => {
      if (c - 1 === 0) {
        e.target.closest(".product-container").remove();
        return;
      }
      return c - 1;
    });
    setPrice(price - item.price);
    onQuantityChange(total - item.price);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
    setPrice(price + item.price);
    onQuantityChange(total + item.price);
  };

  return (
    <div
      className="product-container col col-12"
      data-count={item.quantity}
      data-price={item.price}
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
              onClick={handleMinusClick}
            />
            {/* <span className="product-count">{item.quantity}</span> */}
            <span className="product-count">{count}</span>
            <img
              src={iconPlus}
              alt="iconPlus"
              className="product-action plus"
              onClick={handlePlusClick}
            />
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

function ProductList({ onQuantityChange, total, cartItems }) {
  const listItems = cartItems.map((item) => {
    return (
      <Item
        item={item}
        key={item.id}
        onQuantityChange={onQuantityChange}
        total={total}
      />
    );
  });

  return (
    <section className="product-list col col-12" data-total-price="0">
      {listItems}
    </section>
  );
}

export default ProductList;
