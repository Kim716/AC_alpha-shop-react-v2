import React, { useState, useContext } from "react";

// Component
import Step from "./Step";
import Cart from "./Cart";

// Data
import CartContext from "../../constants/CartContext";

function Main() {
  const [cartItems, setCartItems] = useState(useContext(CartContext));
  const [shipPrice, setShipPrice] = useState(0);

  const handleRadioChange = (price) => {
    setShipPrice(price);
  };

  const handleQuantityClick = (quantityChange) => {
    setCartItems(quantityChange);
  };

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <Step onRadioChange={handleRadioChange} />

          <CartContext.Provider value={cartItems}>
            <Cart
              shipPrice={shipPrice}
              onQuantityChange={handleQuantityClick}
            />
          </CartContext.Provider>
        </div>
      </main>
    </>
  );
}

export default Main;
