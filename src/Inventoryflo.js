import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import InventoryContainer from "./components/warehouse/inventory/InventoryContainer";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

function Inventoryflo() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Route exact path="/signup-user" component={SignUp} />
				<Route exact path="/signin-user" component={Login} />
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/inventories" component={InventoryContainer} />
			</div>
		</Router>
	);
}

export default Inventoryflo;
