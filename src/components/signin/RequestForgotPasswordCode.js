import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";
import API from "../utils/urls";
import Spinner from "../utils/Spinner";

export const RequestCode = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickedSubmit, setclickedSubmit] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setEmail(target.value);
  };

  useEffect(() => {
    const url = `${API.urls.SEND_RESET_CODE}/${email}`;
    const handleSubmit = async () => {
      try {
        const res = await fetch(API.API_ROOT + url, {
          method: "POST",
        });
        const data = await res.json();

        if (res.ok) {
          setLoading(!loading);
          if (data.status === "success") {
            // TODO: Replace with a good toast message
            alert("Code sent successfully");
            history.push("/forgot-password");
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
                      <TextFieldGroup
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        //  error={errors.email}
                      />

                      <input
                        onClick={() => setclickedSubmit(true)}
                        type="submit"
                        className="btn btn-info btn-block mt-4"
                      />
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
