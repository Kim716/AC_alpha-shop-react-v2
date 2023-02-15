import React from "react";
import { appellations, county } from "../../../constants/data";

function Input({ inputID, label, type, placeholder }) {
  return (
    <>
      <label htmlFor={inputID} className="input-label">
        {label}
      </label>
      {/* !!! 改 block */}
      <input type={type} placeholder={placeholder} id={inputID} />
    </>
  );
}

function Select({ selectID, label, optionData }) {
  const optionList = optionData.map((option) => (
    <option
      key={option.value}
      value={option.value}
      disabled={option.value === "" ? true : false}
    >
      {option.content}
    </option>
  ));

  return (
    <>
      <div className="input-label" htmlFor={selectID}>
        {label}
      </div>
      <div className="select-container">
        <select id={selectID} defaultValue="" required>
          {optionList}
        </select>
      </div>
    </>
  );
}

function Part1() {
  const inputType = {
    fullName: {
      inputID: "input_name",
      label: "姓名",
      type: "text",
      placeholder: "請輸入姓名",
    },
    telephone: {
      inputID: "input_phone",
      label: "電話",
      type: "tel",
      placeholder: "請輸入行動電話",
    },
    email: {
      inputID: "input_email",
      label: "Email",
      type: "email",
      placeholder: "請輸入電子郵件",
    },
    address: {
      inputID: "input_address",
      label: "地址",
      type: "text",
      placeholder: "請輸入地址",
    },
  };

  return (
    <>
      {/* <!-- address phase --> */}
      <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body col col-12">
          {/* 第一行 */}
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-s1">
              <Select
                selectID="select-appellations"
                label="稱謂"
                optionData={appellations}
              />
            </div>

            <div className="input-group input-w-lg-4 input-w-sm-s2">
              <Input {...inputType.fullName} />
            </div>
          </div>
          {/* 第一行end */}

          {/* 第二行 */}
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <Input {...inputType.telephone} />
            </div>

            <div className="input-group input-w-lg-3 input-w-sm-full">
              <Input {...inputType.email} />
            </div>
          </div>
          {/* 第二行end */}

          {/* 第三行 */}
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-full">
              <Select
                selectID="select-county"
                label="縣市"
                optionData={county}
              />
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <Input {...inputType.address} />
            </div>
          </div>
          {/* 第三行end */}
        </section>
      </form>
    </>
  );
}

export default Part1;
export { Input };
