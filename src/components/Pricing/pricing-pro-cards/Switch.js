import React from "react";
import Form from "react-bootstrap/Form";

const Switch = () => {
  return (
    <div className="row my-3">
      <div className="col-8 text-left price-text-smallest">
        <p>
          FBA Integration{" "}
          <i className="fa fa-info-circle price-text-smallest"></i>
        </p>
        <p>Add $16/mo</p>
      </div>
      <div className="col-4">
        <Form>
          <Form.Check type="switch" isValid id="custom-switch" label="" />
        </Form>
      </div>
    </div>
  );
};

export default Switch;
