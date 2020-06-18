import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import InventoryContainer from "../components/warehouse/inventory/InventoryContainer";
import register from "../components/signup";
import signin from "../components/signin";
import NotFound from "./NotFound";
import Layout from "../components/layout/Layout";
import ConfirmSignUp from "../components/signup/ConfirmSignUp";
import ForgotPassword from "../components/signin/ForgotPassword";

function Inventoryflo() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/signup-user" component={register.SignUp} />
					<Route exact path="/signin-user" component={signin.Login} />
					{/* TODO: replace with confirm password */}
					<Route path="/confirm-signup/:userId" component={ConfirmSignUp} />
					<Route exact path="/forgot-password" component={ForgotPassword} />
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/inventories" component={InventoryContainer} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default Inventoryflo;
