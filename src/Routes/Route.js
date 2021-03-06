import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../components/layout/Layout";
import { Spinner } from "../components/utils/components";
import Policy from "../components/layout/Policy";
import Integrations from "../components/layout/Integrations";
import Pricing from "../components/Pricing/Pricing";
import Landing from "../components/landing/Landing";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoutes";
import { authRoutes, privateRoutes } from "./constants";
import ComingSoon from "../components/landing/ComingSoon";
import PricingPro from "../components/Pricing/PricingPro";
import PricingShopifyPro from "../components/Pricing/PricingShopifyPro";

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
            <Route exact path="/coming-soon" component={ComingSoon} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/pricing-pro" component={PricingPro} />
            <Route
              exact
              path="/pricing-sfs-pro"
              component={PricingShopifyPro}
            />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default Inventoryflo;
