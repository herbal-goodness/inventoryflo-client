import React, { Component } from "react";
import InventoryTable from "./InventoryTable";

export class InventoryContainer extends Component {
	render() {
		return (
			<div className="container-fluid mx-auto main">
				<div className="row">
					<div className="col-md-3">....</div>
					<div className="col-md-9">
						<header className="d-flex justify-content-between mb-2 dashboard-header">
							<h2>
								<i className="fa fa-cube"></i> inventory
							</h2>
							<h4>Last update less than a minute ago</h4>
						</header>
						<InventoryTable />
					</div>
				</div>
			</div>
		);
	}
}

export default InventoryContainer;
