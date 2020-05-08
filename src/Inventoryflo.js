import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function Inventoryflo() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
		</Router>
	);
}

export default Inventoryflo;
