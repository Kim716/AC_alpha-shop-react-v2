import React from "react";
import iconCheck from "../../../assets/icons/ic_baseline-check.svg";

function ProgressGroup({ phase, order, label }) {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{order}</span>
          <img src={iconCheck} alt="iconCheck" className="icon cursor-point" />
        </span>
        <span className="progress-label">{label}</span>
      </span>
      {order !== 3 && <span className="progress-bar" data-order={order}></span>}
    </>
  );
}

function Progress() {
  return (
    <>
      {/* <!-- register-title --> */}
      <h2 className="register-title col col-12">結帳</h2>

      {/* <!-- register-progress --> */}
      <section className="progress-container col col-12">
        <ProgressGroup phase="address" order={1} label="寄送地址" />

        <ProgressGroup phase="shipping" order={2} label="運送方式" />

        <ProgressGroup phase="credit-card" order={3} label="付款資訊" />
      </section>
    </>
  );
}

export default Progress;
