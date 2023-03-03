import { createContext } from "react";

// ***************＊
import { cartItems } from "./CartContext";

const totalPrice = cartItems
  .map((item) => item.price * item.quantity)
  .reduce((sum, price) => sum + price, 0);

// 初始的 OrderContext 就會含有 total_price
const OrderContext = createContext({
  total_price: totalPrice,
  shipping_type: "standard",
});

export default OrderContext;

// 筆記：Kelly 的寫法，把 Provider 會提供的邏輯操作包裹在這裡
/*
// function OrderProvider({ children }) {
//   const [orderMessage, setOrderMessage] = useState(useContext(OrderContext));

//   const handleOrderMessageChange = (value, orderId) => {
//     setOrderMessage({
//       ...orderMessage,
//       [orderId]: value,
//     });
//   };

//   return (
//     <OrderContext.Provider value={{ orderMessage, handleOrderMessageChange }}>
//       {children}
//     </OrderContext.Provider>
//   );
// }


// export { OrderProvider };
*/
