import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import InventoryContainer from "./warehouse/inventory/InventoryContainer";

function Inventoryflo() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Route exact path="/" component={Dashboard} />
				<Route exact path="/inventories" component={InventoryContainer} />
			</div>
		</Router>
	);
}

export default Inventoryflo;
