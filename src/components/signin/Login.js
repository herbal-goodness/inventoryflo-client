import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/inventoryflo-logo-2.png";
import { loginRequest } from "./actions";
import { Spinner, AlertDismissible } from "../utils/components";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [{ isError, errorMessage }, setErrors] = useState({
    isError: false,
    errorMessage: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  /**selects some pieces of the state */
  const { loading, error } = useSelector(({ login }) => ({
    loading: login.loading,
    error: login.error,
  }));
  const { successful } = useSelector(({ userInfo }) => ({
    successful: userInfo.successful,
  }));

  /** gets the information from the input fields */
  const handleChange = ({ target }) => {
    setLoginInfo({ ...loginInfo, [target.name]: target.value });
  };

  //Check when enter button is clicked to submit
  useEffect(() => {
    const listener = (e) => {
      if (!loginInfo.email || !loginInfo.password) return;
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        handleSubmit(e);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [loginInfo]);

  /** dispatch action to submit login details */
  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch the login action with the login details payload
    dispatch(loginRequest({ loginInfo, history }));
  };

  useEffect(() => {
    setErrors({ isError: false, errorMessage: "" });
    if (successful) {
      dispatch({ type: "GET_SALES_AND_ORDER" });
      return history.push("/dashboard");
    }
    if (error) setErrors({ isError: true, errorMessage: error.error });
  }, [loading, successful]);

  return (
    <div className="login mb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6 col-lg-4 m-auto">
            {isError && (
              <AlertDismissible
                header={"Error"}
                message={errorMessage}
                variant={"danger"}
              />
            )}
            <header className="brand">
              <Link to="/">
                <img className="main-logo" src={logo} alt="inventoryflo logo" />
              </Link>
            </header>
            <div className="card">
              <div className="card-header text-center text-green">Log In</div>
              {loading ? (
                Spinner()
              ) : (
                <div className="card-body">
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={loginInfo.email}
                    onChange={handleChange}
                    error={
                      !/^.+@[^\.].*\.[a-z]{2,}$/.test(loginInfo.email) &&
                      loginInfo.email?.length > 2
                        ? "This is not a valid mail"
                        : ""
                    }
                  />

                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                    error={
                      !strongRegex.test(loginInfo.password) &&
                      loginInfo.password?.length > 3
                        ? "Password must contain  at least 1 lowercase,uppercase, special character and number"
                        : ""
                    }
                  />

                  <input
                    onClick={handleSubmit}
                    type="submit"
                    disabled={!strongRegex.test(loginInfo.password)}
                    value="Sign in to your account"
                    className="btn btn-info btn-block mt-4"
                  />
                  <div className="text-center mt-3">
                    <p className="text-muted d-flex justify-content-between">
                      <Link
                        to="/signup-user"
                        className="text-decoration-none text-green text-slim"
                      >
                        Create account
                      </Link>
                      <span className={"d-block"}>
                        <Link
                          to="/send-reset-code"
                          className="text-gray text-slim"
                        >
                          forgot password?
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
