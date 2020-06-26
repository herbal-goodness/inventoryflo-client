import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/inventoryflo-logo-2.png";
import { FORM_DETAILS } from "./constants";
import API from "../utils/urls";
import { Spinner, AlertDismissible } from "../utils/components";

export const ForgotPassword = () => {
  const [forgotPassdetails, setDetails] = useState({});
  const [showLink, setShowLink] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clickedSubmit, setclickedSubmit] = useState(false);
  const [{ isError, isSuccess, message }, setMessage] = useState({
    isError: false,
    isSuccess: false,
    message: "",
  });
  const history = useHistory();
  const { state } = useLocation();

  const handleChange = ({ target }) => {
    setDetails({ ...forgotPassdetails, [target.name]: target.value });
  };

  useEffect(() => {
    setTimeout(() => setShowLink(true), 10000);

    const url = `${API.urls.FORGOT_PASSWORD}`;
    if (state !== undefined) {
      const handleSubmit = async () => {
        try {
          const res = await fetch(API.API_ROOT + url, {
            method: "PUT",
            body: JSON.stringify({ ...forgotPassdetails, email: state.email }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();

          if (res.ok) {
            setLoading(!loading);
            if (data.status === "success") {
              setMessage({
                isError: false,
                isSuccess: true,
                message: "Password changed please login to continue",
              });

              setTimeout(() => {
                history.push("/");
              }, 4000);
            }
          }

          if (res.status > 300) {
            setLoading(false);
            setMessage({
              isError: true,
              isSuccess: false,
              message: data.error,
            });
            console.log(data.error);
          }
        } catch (error) {
          setLoading(false);
          setMessage({
            isError: true,
            isSuccess: false,
            message: error.error,
          });
          console.log(error);
        }
      };
      console.log(state);

      if (clickedSubmit) {
        setclickedSubmit(false);
        setLoading(true);
        handleSubmit();
      }
    } else {
      // redirect to send code since the state has no email for the user
      return history.push("/send-reset-code");
    }
  }, [clickedSubmit]);

  return (
    <div className="login mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            {isSuccess && (
              <AlertDismissible
                header={"Successfully"}
                message={message}
                variant={"success"}
              />
            )}

            {isError && (
              <AlertDismissible
                header={"Error"}
                message={message}
                variant={"danger"}
              />
            )}

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

                  {showLink && (
                    <div className="mt-3">
                      <p className="text-muted d-flex justify-content-between">
                        <span className="text-decoration-none text-green text-slim">
                          Didn't receive any code?{" "}
                        </span>
                        <Link
                          to="/send-reset-code"
                          className="text-info text-slim d-block"
                        >
                          Resend Code
                        </Link>
                      </p>
                    </div>
                  )}
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
