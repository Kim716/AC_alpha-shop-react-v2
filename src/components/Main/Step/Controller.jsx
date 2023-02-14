import React from "react";
import iconLeftArrow from "../../../assets/icons/iconLeftArrow.svg";
import iconRightArrow from "../../../assets/icons/iconRightArrow.svg";

function NextButton() {
  return (
    <button className="next">
      下一步
      <img src={iconRightArrow} alt="iconRightArrow" />
      {/*!!! button 設計時要穿透他有 cursor */}
    </button>
  );
}
function PrevButton() {
  return (
    <button className="prev">
      上一步
      <img src={iconLeftArrow} alt="iconLeftArrow" />{" "}
      {/*!!! button 設計時要穿透他有 cursor */}
    </button>
  );
}

function ButtonGroup({ phase }) {
  return (
    <section className="button-group col col-12" data-phase={phase}>
      {phase !== "address" && <PrevButton />}
      {phase !== "credit-card" ? (
        <NextButton />
      ) : (
        <button className="next">確認下單</button>
      )}
    </section>
  );
}

function Controller() {
  return (
    <>
      {/* <!-- progress-control --> */}
      <section className="progress-control-container col col-lg-6 col-sm-12">
        {/* 表單按鈕part1 */}
        <ButtonGroup phase="address" />

        {/* 表單按鈕part2 */}
        <ButtonGroup phase="shipping" />

        {/* 表單按鈕part3 */}
        <ButtonGroup phase="credit-card" />
      </section>
    </>
  );
}

export default Controller;
