import React from "react";
import { Link } from "react-router-dom";
import successIcon from "../../images/success.png";

const Success = () => {
  return (
    <div className="container-fluid h-75 mt-5">
      <div className="d-flex flex-column align-items-center align-content-between">
        <img
          src={successIcon}
          alt="success icon"
          width="10%"
          height="10%"
          className="align-self-center"
        />
        <h3 className="pt-5 lg">
          Successfully verified, please <Link to={"/"}>login</Link>
        </h3>
      </div>
    </div>
  );
};

export default Success;
