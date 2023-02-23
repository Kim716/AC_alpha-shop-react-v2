import React, { useState } from "react";
import Step from "./Step";
import Cart from "./Cart";

import cartItems from "../../constants/cartInitData";

// 算出目前購物車商品的總價
const totalPrice = cartItems
  .map((item) => item.price * item.quantity)
  .reduce((sum, price) => sum + price, 0);

function Main() {
  const [shipPrice, setShipPrice] = useState(0);
  const [total, setTotal] = useState(totalPrice + shipPrice);

  const handleChange = (sum) => {
    setTotal(sum);
  };

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <Step
            onRadioClick={(price) => {
              console.log(price);
              setShipPrice(price);
              if (price === 0) {
                handleChange(total - 500);
              } else {
                handleChange(total + 500);
              }
            }}
          />
          <Cart
            shipPrice={shipPrice}
            cartItems={cartItems}
            onQuantityChange={handleChange}
            total={total}
          />
        </div>
      </main>
    </>
  );
}

export default Main;
