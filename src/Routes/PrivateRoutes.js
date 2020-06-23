import React, { useState, useEffect, useCallback } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { isAuthenticated } from "../services/auth";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/utils/Spinner";

const PrivateRoute = (props) => {
  const [isLoggedIn, setLogin] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { successful } = useSelector(({ userInfo }) => ({
    successful: userInfo.successful,
  }));

  useEffect(() => {
    async function checkForAuth() {
      try {
        const data = await isAuthenticated(dispatch, history);
        console.log(data, "========");
        setLogin(data);
      } catch (error) {
        console.log(error);
      }
    }
    checkForAuth();
  }, [successful]);

  if (successful && !isLoggedIn) {
    return <div style={{ margin: "25% 25%" }}>{<Spinner />}</div>;
  }

  if (isLoggedIn && successful) {
    return (
      <>
        <Navbar />
        <Route {...props} />
      </>
    );
  }
  if (!successful && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
};

export default PrivateRoute;
