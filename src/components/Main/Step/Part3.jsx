import React from "react";
import { Input } from "./Part1";

function Part3() {
  const inputType = {
    cardName: {
      inputID: "input_cardName",
      label: "持卡人姓名",
      type: "text",
      placeholder: "John Doe",
    },
    cardNumber: {
      inputID: "input_cardNumber",
      label: "卡號",
      type: "text",
      placeholder: "1111 2222 3333 4444",
    },
    expiryDate: {
      inputID: "input_expiryDate",
      label: "有效期限",
      type: "text",
      placeholder: "MM/YY",
    },
    code: {
      inputID: "input_verificationCode",
      label: "CVC / CCV",
      type: "text",
      placeholder: "123",
    },
  };

  return (
    <>
      {/* <!-- credit-card phase --> */}
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          {/* 第一行 */}
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <Input {...inputType.cardName} />
            </div>
          </div>
          {/* 第一行end */}

          {/* 第二行 */}
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <Input {...inputType.cardNumber} />
            </div>
          </div>
          {/* 第二行end */}

          {/* 第三行 */}
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <Input {...inputType.expiryDate} />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <Input {...inputType.code} />
            </div>
          </div>
          {/* 第三行end */}
        </section>
      </form>
    </>
  );
}

export default Part3;
