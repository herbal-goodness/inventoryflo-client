import React, { useState } from "react";

const Switch = ({ checked }) => {
  const [ischecked, setChecked] = useState({ checked: false });
  const checkedHandle = () => {
    setChecked({ ...ischecked, checked: !ischecked.checked });
    checked(!ischecked.checked);
  };
  return (
    <div className="row my-3">
      <div className="col-8 text-left price-text-smallest">
        <p>
          FBA Integration{" "}
          <i className="fa fa-info-circle price-text-smallest"></i>
        </p>
        <p>Add $19/mo</p>
      </div>
      <div className="col-4">
        <label className="switch">
          <input onChange={checkedHandle} type="checkbox" {...ischecked} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
