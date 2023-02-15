import React from "react";
import Progress from "./Progress";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Controller from "./Controller";

function Step() {
  return (
    <>
      {/* <!-- register --> */}
      <section
        className="register-container col col-lg-6 col-sm-12"
        data-phase="1"
        data-total-price="0"
      >
        <Progress />
        {/* <!-- register-form --> */}
        <section className="form-container col col-12">
          <Part1 />
          <Part2 />
          <Part3 />
        </section>
        <Controller />
      </section>
    </>
  );
}

export default Step;
