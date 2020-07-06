import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InventoryContainer from "../components/warehouse/inventory/InventoryContainer";
import register from "../components/signup";
import signin from "../components/signin";
import NotFound from "./NotFound";
import Layout from "../components/layout/Layout";
import { Spinner } from "../components/utils/components";
import Policy from "../components/layout/Policy";
import Integrations from "../components/layout/Integrations";
import Landing from "../components/landing/Landing";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoutes";

import { authRoutes, privateRoutes } from "./constants";

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
            {authRoutes.map((item, i) => (
              <AuthRoute key={i} exact {...item} />
            ))}
            {privateRoutes.map((item, i) => (
              <PrivateRoute key={i} exact {...item} />
            ))}
            <Route exact path="/" component={Landing} />
            <Route exact path="/privacy-policy" component={Policy} />
            <Route exact path="/integrations" component={Integrations} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default Inventoryflo;
