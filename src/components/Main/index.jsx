import React from "react";
import Step from "./Step";
import Cart from "./Cart";

function Main() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <Step />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default Main;
