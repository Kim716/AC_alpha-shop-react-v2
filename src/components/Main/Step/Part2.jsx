import React from "react";

function RadioInput({ price, shipType, title, time }) {
  return (
    <label className="radio-group col col-12" data-price={price}>
      <input
        id={`shipping-${shipType}`}
        type="radio"
        name="shipping"
        defaultChecked={shipType === "standard" && true}
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

function Part2() {
  return (
    <>
      {/* <!-- shipping phase --> */}
      <form className="col col-12" data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body col col-12">
          <RadioInput
            price={0}
            shipType="standard"
            title="標準運送"
            time="約 3~7 個工作天"
          />

          <RadioInput
            price={500}
            shipType="dhl"
            title="DHL 貨運"
            time="48 小時內送達"
          />
        </section>
      </form>
    </>
  );
}

export default Part2;