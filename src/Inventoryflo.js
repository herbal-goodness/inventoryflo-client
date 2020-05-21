import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

function Inventoryflo() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/dashboard" component={Dashboard} />
			</div>
		</Router>
	);
}

export default Inventoryflo;
