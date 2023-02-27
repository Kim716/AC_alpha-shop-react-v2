import React, { useState } from "react";
import Progress from "./Progress";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Controller from "./Controller";

function Step({ onRadioChange }) {
  const [phase, setPhase] = useState("address");
  const [order, setOrder] = useState(1);

  const handleClick = (e) => {
    const btnPhase = e.target.parentElement.dataset.phase;

    // 控制下一步的按鈕
    if (e.target.className === "next") {
      if (btnPhase === "address") {
        setPhase("shopping");
      }
      if (btnPhase === "shopping") {
        setPhase("credit-card");
      }
      setOrder((o) => o + 1);
      return;
    }

    // 控制上一步的按鈕
    if (btnPhase === "shopping") {
      setPhase("address");
    }
    if (btnPhase === "credit-card") {
      setPhase("shopping");
    }
    setOrder((o) => o - 1);
  };

  return (
    <>
      {/* <!-- register --> */}
      <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase={order}
        data-total-price="0"
      >
        <Progress phase={phase} />
        {/* <!-- register-form --> */}
        <section className="form-container col col-12">
          <Part1 />
          <Part2 onRadioChange={onRadioChange} />
          <Part3 />
        </section>
        <Controller phase={phase} onClick={handleClick} />
      </section>
    </>
  );
}

export default Step;
