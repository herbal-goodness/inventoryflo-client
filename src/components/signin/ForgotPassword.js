import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";
import { FORM_DETAILS } from "./constants";
import API from "../utils/urls";
import Spinner from "../utils/Spinner";

export const ForgotPassword = () => {
  const [forgotPassdetails, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [clickedSubmit, setclickedSubmit] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setDetails({ ...forgotPassdetails, [target.name]: target.value });
  };

  useEffect(() => {
    const url = `${API.urls.FORGOT_PASSWORD}`;
    console.log(forgotPassdetails);

    const handleSubmit = async () => {
      try {
        const res = await fetch(API.API_ROOT + url, {
          method: "PUT",
          body: JSON.stringify(forgotPassdetails),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        if (res.ok) {
          setLoading(!loading);
          if (data.status === "success") {
            // TODO: Replace with a good toast message
            alert("Password changed please login to continue");
            history.push("/");
            dispatch({ type: "RESET_STATE" });
          }
        }

        if (res.status > 300) {
          setLoading(false);
          // TODO: Replace with a good toast message
          console.log(data.error);

          alert(data.error);
        }
      } catch (error) {
        setLoading(false);
        // TODO: Replace with a good toast message
        console.log(error);
      }
    };

    if (clickedSubmit) {
      setclickedSubmit(false);
      setLoading(true);
      handleSubmit();
    }
  }, [clickedSubmit]);

  return (
    <div className="login mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            <header className="brand">
              <Link to="/">
                <img className="main-logo" src={logo} alt="inventoryflo logo" />
              </Link>
            </header>
            <div className="card">
              <div className="card-header text-center">
                Create a new password
              </div>
              <div className="card-body">
                <div className="card-text">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      {FORM_DETAILS.map(
                        ({ name, placeholder, type }, index) => (
                          <TextFieldGroup
                            key={index}
                            placeholder={placeholder}
                            name={name}
                            type={type}
                            value={forgotPassdetails[name]}
                            onChange={handleChange}
                            //  error={errors.email}
                          />
                        )
                      )}

                      <input
                        onClick={() => setclickedSubmit(true)}
                        type="submit"
                        disabled={
                          forgotPassdetails.confirmationCode?.length !== 6
                        }
                        className="btn btn-info btn-block mt-4"
                      />
                    </>
                  )}
                  {/* TODO: make this align with design */}
                  <p>
                    Resquest a <Link to="/send-reset-code"> new code</Link>
                  </p>
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
