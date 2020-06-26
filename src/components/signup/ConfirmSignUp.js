import React, { useState, useEffect } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../images/inventoryflo-logo-2.png";
import API from "../utils/urls";
import { Spinner, AlertDismissible } from "../utils/components";
import { useDispatch } from "react-redux";
import { Toast, ToastBody } from "react-bootstrap";

const ConfirmSignUp = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = React.useState(30);
  const [clickedSubmit, setclickedSubmit] = useState(false);
  const [{ isError, message }, setMessage] = useState({
    isError: false,
    message: "",
  });
  const history = useHistory();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const resendConfirm = async () => {
    setCounter(30);
    try {
      const res = await fetch(`${API.API_ROOT}/resend-confirm-code`, {
        body: JSON.stringify({ email: state.email }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const { message } = await res.json();
        console.log(message);
      }

      if (res.status > 300) {
        const data = await res.json();
        alert(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMessage({ isError: false, message: "" });
    const url = state.userId
      ? `${API.urls.CONFIRM_CODE}/${state.userId}?email=${state.email}&confirmationCode=${confirmationCode}`
      : "";
    const handleSubmit = async () => {
      try {
        const res = await fetch(API.API_ROOT + url, {
          method: "PUT",
        });
        const data = await res.json();

        if (res.ok) {
          setLoading(!loading);
          if (data.status === "success") {
            history.push("/sign-up-succsess");
            dispatch({ type: "RESET_STATE" });
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
        setMessage({
          isError: true,
          message: error.error,
        });
        console.log(error);
      }
    };
    if (
      confirmationCode.length === 6 ||
      (clickedSubmit && confirmationCode.length === 6)
    ) {
      setLoading(!loading);
      handleSubmit();
    }
  }, [confirmationCode, clickedSubmit]);

  useEffect(() => {
    let timer;
    timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="login mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            {isError && (
              <AlertDismissible
                header={"Error!"}
                message={message}
                variant={"danger"}
              />
            )}
            <header className="brand">
              <h1>
                <img className="main-logo" src={logo} alt="inventoryflo logo" />
              </h1>
            </header>
            {loading ? (
              Spinner()
            ) : (
              <div className="card">
                <div className="card-header text-center text-green">
                  Confirm Signup
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <TextFieldGroup
                      placeholder="Enter confirmation code"
                      name="confirmationCode"
                      type="text"
                      value={confirmationCode}
                      onChange={(e) => setConfirmationCode(e.target.value)}
                    />
                    <input
                      onClick={() => setclickedSubmit(true)}
                      type="submit"
                      value="Register"
                      className="btn btn-info btn-block mt-4"
                    />
                    {counter !== 0 ? (
                      <>
                        <h3 className="mt-2 text-center">{counter}</h3>
                        <div style={{ width: "100%" }}>
                          <div
                            style={{
                              height: "5px",
                              backgroundColor: "green",
                              width: `calc(100% / ${counter})`,
                            }}
                          ></div>
                        </div>
                      </>
                    ) : (
                      <div className="mt-3">
                        <p className="text-muted d-flex justify-content-between">
                          <span className="pt-2 text-decoration-none text-green text-slim">
                            Didn't receive any code?{" "}
                          </span>
                          <button
                            type="button"
                            className="btn btn-link text-info text-slim d-block"
                            onClick={resendConfirm}
                          >
                            Resend Code
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmSignUp;
