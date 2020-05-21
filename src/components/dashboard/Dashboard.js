import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
	render() {
		return (
			<div className="container-fluid mx-auto main">
				<header className="d-flex justify-content-between mb-2 dashboard-header">
					<h2>
						<i className="fa fa-tachometer"></i> dashboard
					</h2>
					<h4>Last update less than a minute ago</h4>
				</header>
				<div className="row">
					<div className="col-md-3">
						<div class="card">
							<div class="card-header">To Do</div>
							<div class="card-body">
								<div className="title">
									<h2>Listing</h2>
								</div>
								<h5 class="card-title">
									<i
										className="fa fa-tag mr-2 font-icons"
										aria-hidden="true"></i>{" "}
									Create your first listing
								</h5>

								<div className="overlay-right overlay-right-1">
									<button className="btn btn-secondary" title="start">
										<i
											className="fa fa-external-link font-icons"
											aria-hidden="true"></i>
									</button>
								</div>
								<div className="title">
									<h2>Inventory</h2>
								</div>
								<h5 class="card-title">
									<i
										className="fa fa-refresh mr-2 font-icons"
										aria-hidden="true"></i>{" "}
									Enable inventory sync
								</h5>

								<div className="overlay-right overlay-right-2">
									<button className="btn btn-secondary" title="start">
										<i
											className="fa fa-external-link font-icons"
											aria-hidden="true"></i>
									</button>
								</div>
								<div className="title">
									<h2>Order</h2>
								</div>
								<h5 class="card-title">
									<i
										className="fa fa-truck mr-2 font-icons"
										aria-hidden="true"></i>{" "}
									Fulfill an order
								</h5>

								<div className="overlay-right overlay-right-3">
									<button className="btn btn-secondary" title="start">
										<i
											className="fa fa-external-link font-icons"
											aria-hidden="true"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6"></div>
					<div className="col-md-3"></div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
