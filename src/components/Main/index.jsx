import React, { useState } from "react";
import Step from "./Step";
import Cart from "./Cart";

// 引入資料
import cartInitData from "../../constants/cartInitData";

function Main() {
  const [cartItems, setCartItems] = useState(cartInitData);
  const [shipPrice, setShipPrice] = useState(0);

  const handleRadioChange = (price) => {
    setShipPrice(price);
  };

  const handleQuantityClick = (quantity) => {
    setCartItems(quantity);
  };

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <Step onRadioChange={handleRadioChange} />

          <Cart
            shipPrice={shipPrice}
            cartItems={cartItems}
            onQuantityChange={handleQuantityClick}
          />
        </div>
      </main>
    </>
  );
}

export default Main;
