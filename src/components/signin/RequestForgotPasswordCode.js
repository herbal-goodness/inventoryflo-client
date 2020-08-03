import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/inventoryflo-logo-2.png";
import API from "../utils/urls";
import { Spinner, AlertDismissible } from "../utils/components";

export const RequestCode = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickedSubmit, setclickedSubmit] = useState(false);
  const [{ isError, message }, setMessage] = useState({
    isError: false,
    message: "",
  });
  const history = useHistory();

  const handleChange = ({ target }) => {
    setEmail(target.value);
  };

  useEffect(() => {
    setMessage({ isError: false, message: "" });
    const handleSubmit = async () => {
      try {
        const res = await fetch(API.API_ROOT + API.urls.SEND_RESET_CODE, {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (res.ok) {
          setLoading(!loading);
          if (data.status === "success") {
            history.push("/forgot-password", {
              email,
            });
          }
        }

        if (res.status > 300) {
          setLoading(false);
          setMessage({
            isError: true,
            message: data.error,
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        setMessage({
          isError: true,
          message: "Network error",
        });
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
          <div className="col-sm-8 col-md-6 col-lg-4 m-auto">
            {isError && (
              <AlertDismissible
                header={"Error!"}
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
                Send reset password code
              </div>
              <div className="card-body">
                <div className="card-text">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      <TextFieldGroup
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                      />

                      <input
                        onClick={() => setclickedSubmit(true)}
                        type="submit"
                        value="Reset Password"
                        disabled={!/^.+@[^\.].*\.[a-z]{2,}$/.test(email)}
                        className="btn btn-info btn-block mt-4"
                      />
                      <div className="text-center mt-3">
                        <p className="text-muted d-flex justify-content-between">
                          <span className="text-decoration-none text-green text-slim">
                            Never mind, i remembered
                          </span>

                          <Link
                            to="/signin-user"
                            className="text-info text-slim d-block"
                          >
                            sign in again
                          </Link>
                        </p>
                      </div>
                    </>
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

export default RequestCode;
