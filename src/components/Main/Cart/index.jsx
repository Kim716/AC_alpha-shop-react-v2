import React, { useContext } from "react";

// Component
import ProductList from "./ProductList";

// Data
import OrderContext from "../../../constants/OrderContext";

function CartInfo({ type, title, price }) {
  return (
    <section className={`cart-info ${type} col col-12`}>
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart({ onQuantityChange, shipPrice }) {
  const { orderMessage } = useContext(OrderContext);

  return (
    <>
      {/* <!-- cart --> */}
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <ProductList
          onQuantityChange={onQuantityChange}
          shipPrice={shipPrice}
        />
        <CartInfo type="shipping" title="運費" price={shipPrice} />
        <CartInfo type="total" title="小計" price={orderMessage.total_price} />
      </section>
    </>
  );
}

export default Cart;
