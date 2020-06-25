import React, { useState, useEffect } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import API from "../utils/urls";
import { Spinner, AlertDismissible } from "../utils/components";
import { useDispatch } from "react-redux";

const ConfirmSignUp = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickedSubmit, setclickedSubmit] = useState(false);
  const [{ isError, message }, setMessage] = useState({
    isError: false,
    message: "",
  });
  const history = useHistory();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setConfirmationCode(e.target.value);
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
                <div className="card-header text-center">Confirm Signup</div>
                <div className="card-body">
                  <div className="card-text">
                    <TextFieldGroup
                      placeholder="Enter confirmation code"
                      name="confirmationCode"
                      type="text"
                      value={confirmationCode}
                      onChange={handleChange}
                    />
                    <input
                      onClick={() => setclickedSubmit(true)}
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
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
