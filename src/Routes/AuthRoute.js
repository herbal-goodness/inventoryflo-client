import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "./PrivateRoutes";
import Spinner from "../components/utils/Spinner";

const AuthRoute = (props) => {
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
        <PrivateRoute {...props} />
      </>
    );
  }
  if (!successful && !isLoggedIn) {
    return <Route {...props} />;
  }
};

export default AuthRoute;
