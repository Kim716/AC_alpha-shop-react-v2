import React, { useContext } from "react";

// Data
// ***************＊ 為了更新 OrderMessage 的 totalPrice 而加的
import CartContext from "../../../constants/CartContext";
import OrderContext from "../../../constants/OrderContext";

function RadioInput({ shipPrice, shipType, title, time, onRadioChange }) {
  // ***************＊
  const cartItems = useContext(CartContext);
  const { handleOrderMessageChange } = useContext(OrderContext);

  return (
    <label className="radio-group col col-12" data-price={shipPrice}>
      <input
        id={`shipping-${shipType}`}
        type="radio"
        name="shipping"
        defaultChecked={shipType === "standard" && true}
        onChange={() => {
          onRadioChange(shipPrice);
          handleOrderMessageChange(shipType, "shipping_type");

          // ***************＊
          const totalPrice =
            cartItems
              .map((item) => item.price * item.quantity)
              .reduce((sum, price) => sum + price, 0) + shipPrice;
          handleOrderMessageChange(totalPrice, "total_price");
        }}
      />
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{title}</div>
          <div className="price"></div>
        </div>
        <div className="period col col-12">{time}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  );
}

function Part2({ onRadioChange }) {
  return (
    <>
      {/* <!-- shipping phase --> */}
      <form className="col col-12" data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body col col-12">
          <RadioInput
            shipPrice={0}
            shipType="standard"
            title="標準運送"
            time="約 3~7 個工作天"
            onRadioChange={onRadioChange}
          />

          <RadioInput
            shipPrice={500}
            shipType="dhl"
            title="DHL 貨運"
            time="48 小時內送達"
            onRadioChange={onRadioChange}
          />
        </section>
      </form>
    </>
  );
}

export default Part2;
