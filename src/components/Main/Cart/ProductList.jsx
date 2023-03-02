import React, { useContext } from "react";

// Data
import iconMinus from "../../../assets/icons/iconMinus.svg";
import iconPlus from "../../../assets/icons/iconPlus.svg";
import CartContext from "../../../constants/CartContext";

function ProductList({ onQuantityChange }) {
  const cartItems = useContext(CartContext);

  const handleQuantityClick = (e) => {
    const targetId = e.target.closest(".product-container").id;
    const isMinus = e.target.classList.contains("minus");

    const newCartItems = cartItems.map((item) => {
      // 辨識是哪個商品，做出更新過的資料
      if (item.id === targetId) {
        return {
          ...item,
          // 判斷是加還是減
          quantity: isMinus ? item.quantity - 1 : item.quantity + 1,
        };
      }
      return item;
    });

    // 過濾掉數量為0的商品
    const nextCartItems = newCartItems.filter((item) => item.quantity > 0);

    onQuantityChange(nextCartItems);
  };

  const listItems = cartItems.map((item) => {
    return (
      <div
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
        id={item.id}
        key={item.id} // 不會出現在 DOM
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
                onClick={handleQuantityClick}
              />
              <span className="product-count">{item.quantity}</span>
              <img
                src={iconPlus}
                alt="iconPlus"
                className="product-action plus"
                onClick={handleQuantityClick}
              />
            </div>
          </div>
          <div className="price">{item.quantity * item.price}</div>
        </div>
      </div>
    );
  });

  return (
    <section className="product-list col col-12" data-total-price="0">
      {listItems}
    </section>
  );
}

export default ProductList;
