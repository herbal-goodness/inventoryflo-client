import React, { Component } from "react";
import InventoryTable from "./InventoryTable";
import { Link } from "react-router-dom";

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
							<h4>
								<Link to="" className="btn btn-outline-primary mr-2">
									<i
										className="fa fa-sign-out fa-fw mr-1"
										aria-hidden="true"></i>{" "}
									Import from CSV
								</Link>
								<Link to="" className="btn btn-info mr-2">
									<i
										className="fa fa-building fa-fw mr-1"
										aria-hidden="true"></i>{" "}
									Manage locations
								</Link>
								<Link to="" className="btn btn-outline-primary">
									<i
										className="fa fa-sign-out fa-fw mr-1"
										aria-hidden="true"></i>{" "}
									Export
								</Link>
							</h4>
						</header>
						<InventoryTable />
					</div>
				</div>
			</div>
		);
	}
}

export default InventoryContainer;
