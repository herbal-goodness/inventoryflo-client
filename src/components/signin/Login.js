import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";
import { loginRequest } from "./actions";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  /**selects some pieces of the state */
  const { user, successful, loading, error } = useSelector(({ login }) => ({
    loading: login.loading,
    successful: login.successful,
    user: login.userInfo,
    error: login.error,
  }));

  /** gets the information from the input fields */
  const handleChange = ({ target }) => {
    setLoginInfo({ ...loginInfo, [target.name]: target.value });
  };

  /** dispatch action to submit login details */
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with a better check for error and report appropriately
    if (!/@/.test(loginInfo.email) || loginInfo.password.length < 3) {
      setErrors({ password: "invalid", email: "invalid" });
    }
    // dispatch the login action with the login details payload
    dispatch(loginRequest(loginInfo));
  };

  useEffect(() => {
    //TODO: push user to dashboard and pull users data
    if (successful) return history.push(`/confirm-signup/${user.userId}`);
    // TODO: Replace alert with cool toast message
    if (error) return alert(error.error);
  }, [loading]);

  return (
    <div className="login mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            <header class="brand">
              <h1>
                <img class="main-logo" src={logo} alt="inventoryflo logo" />
              </h1>
            </header>
            <div class="card">
              <div class="card-header text-center">Log In</div>
              <div class="card-body">
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={loginInfo.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={loginInfo.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <input
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;