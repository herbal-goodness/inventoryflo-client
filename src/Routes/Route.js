import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
					}>
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
						<Route
							path="/shopify"
							component={() => {
								window.location.href = "https://www.shopify.com/";
								return null;
							}}
						/>
						<Route
							path="/amazon"
							component={() => {
								window.location.href = "https://www.amazon.com/";
								return null;
							}}
						/>
						<Route
							path="/amazon-fba"
							component={() => {
								window.location.href =
									"https://sell.amazon.com/fulfillment-by-amazon.html";
								return null;
							}}
						/>
						<Route
							path="/efulfillment"
							component={() => {
								window.location.href = "https://www.efulfillmentservice.com/";
								return null;
							}}
						/>
						<Route
							path="/walmart"
							component={() => {
								window.location.href = "https://www.walmart.com/";
								return null;
							}}
						/>
						<Route
							path="/slack"
							component={() => {
								window.location.href = "https://slack.com/intl/en-ng/";
								return null;
							}}
						/>
						<Route
							path="/google-drive"
							component={() => {
								window.location.href = "https://www.google.com/drive/";
								return null;
							}}
						/>
						<Route
							path="/info"
							component={() => {
								window.location.href = "info@inventoryflo.com";
								return null;
							}}
						/>
						<Route
							path="/truste"
							component={() => {
								window.location.href =
									"https://feedback-form.truste.com/watchdog/request";
								return null;
							}}
						/>
						<Route
							path="/do-not-track"
							component={() => {
								window.location.href = "https://allaboutdnt.com/";
								return null;
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
