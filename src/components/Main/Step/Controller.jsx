import React, { useContext } from "react";

// Data
import iconLeftArrow from "../../../assets/icons/iconLeftArrow.svg";
import iconRightArrow from "../../../assets/icons/iconRightArrow.svg";
import OrderContext from "../../../constants/OrderContext";

function NextButton({ onClick }) {
  return (
    <button className="next" onClick={onClick}>
      下一步
      <img src={iconRightArrow} alt="iconRightArrow" />
    </button>
  );
}
function PrevButton({ onClick }) {
  return (
    <button className="prev" onClick={onClick}>
      上一步
      <img src={iconLeftArrow} alt="iconLeftArrow" />
    </button>
  );
}

function Controller({ phase, onClick }) {
  const { orderMessage } = useContext(OrderContext);

  const handleSubmit = () => {
    console.log(orderMessage);
  };

  return (
    <>
      {/* <!-- progress-control --> */}
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase={phase}>
          {phase !== "address" && <PrevButton onClick={onClick} />}
          {phase !== "credit-card" ? (
            <NextButton onClick={onClick} />
          ) : (
            <button className="next" onClick={handleSubmit}>
              確認下單
            </button>
          )}
        </section>
      </section>
    </>
  );
}

export default Controller;
