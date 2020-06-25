import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InventoryContainer from "../components/warehouse/inventory/InventoryContainer";
import register from "../components/signup";
import signin from "../components/signin";
import NotFound from "./NotFound";
import Layout from "../components/layout/Layout";
import ConfirmSignUp from "../components/signup/ConfirmSignUp";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoutes";
import { Spinner } from "../components/utils/components";
import signup from "../components/signup";
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));

function Inventoryflo() {
  return (
    <Router>
      <Layout>
        <Suspense
          fallback={
            <h1 style={{ margin: "20% 22%" }}>
              <Spinner />
            </h1>
          }
        >
          <Switch>
            <AuthRoute exact path="/signup-user" component={register.SignUp} />
            <AuthRoute
              exact
              path="/forgot-password"
              component={signin.ForgotPassword}
            />
            <AuthRoute
              exact
              path="/sign-up-succsess"
              component={register.Success}
            />
            <AuthRoute
              exact
              path="/send-reset-code"
              component={signin.RequestForgotPasswordCode}
            />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <AuthRoute path="/confirm-signup" component={ConfirmSignUp} />
            <AuthRoute exact path="/" component={signin.Login} />
            <PrivateRoute
              exact
              path="/inventories"
              component={InventoryContainer}
            />
            {/*This route is a placeholder */}
            <PrivateRoute
              exact
              path="/admin"
              component={function Admin() {
                return <h1 style={{ margin: "20% 20%" }}>Admin</h1>;
              }}
            />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default Inventoryflo;
