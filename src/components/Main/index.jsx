import React, { useState, useContext } from "react";

// Component
import Step from "./Step";
import Cart from "./Cart";

// Data
import CartContext from "../../constants/CartContext";
import OrderContext from "../../constants/OrderContext";

function Main() {
  const [cartItems, setCartItems] = useState(useContext(CartContext));
  const [shipPrice, setShipPrice] = useState(0);
  const [orderMessage, setOrderMessage] = useState(useContext(OrderContext));

  const handleOrderMessageChange = (value, orderId) => {
    // 因為在 shipping type 那邊會更新兩筆資料，所以這樣寫才可以承先啟後
    setOrderMessage((om) => {
      return { ...om, [orderId]: value };
    });
  };

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
          <OrderContext.Provider
            value={{ orderMessage, handleOrderMessageChange }}
          >
            <CartContext.Provider value={cartItems}>
              <Step onRadioChange={handleRadioChange} />

              <Cart
                shipPrice={shipPrice}
                onQuantityChange={handleQuantityClick}
              />
            </CartContext.Provider>
          </OrderContext.Provider>
        </div>
      </main>
    </>
  );
}

export default Main;
