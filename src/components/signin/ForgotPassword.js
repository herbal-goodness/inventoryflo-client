import React, { useState } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";

export const ForgotPassword = () => {
  const [details, setDetails] = useState({});

  const handleChange = ({ target }) => {
    setDetails({ ...details, [target.name]: target.value });
  };

  return (
    <div className="login mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            <header className="brand">
              <h1>
                <img className="main-logo" src={logo} alt="inventoryflo logo" />
              </h1>
            </header>
            <div className="card">
              <div className="card-header text-center">
                Create a new password
              </div>
              <div className="card-body">
                <div className="card-text">
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={details.email}
                    onChange={handleChange}
                    // error={errors.email}
                  />

                  <TextFieldGroup
                    placeholder="New Password"
                    name="password"
                    type="password"
                    value={details.password}
                    onChange={handleChange}
                    // error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Enter confirmation code"
                    name="confirmationCode"
                    type="text"
                    value={details.confirmationCode}
                    onChange={handleChange}
                    // error={errors.confirmationCode}
                  />
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
