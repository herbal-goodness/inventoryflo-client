import React from "react";

const DashboardSubHeaders = ({ title }) => {
	return (
		<>
			<header className="d-flex justify-content-between mb-2 dashboard-sub-header">
				<h2>{title}</h2>
				<div className="d-flex justify-content-between">
					{/* <h5 className="text-capitalize mr-4">all channels</h5> */}
					<h5
						className="text-capitalize mr-4 dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						all channels
					</h5>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							All channels
						</a>
						<a className="dropdown-item" href="#">
							Shopify
						</a>
						<a className="dropdown-item" href="#">
							Amazon
						</a>
						<a className="dropdown-item" href="#">
							Walmart
						</a>
					</div>
					<div>
						<h5
							className="text-capitalize dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<i className="fa fa-calendar mr-2" aria-hidden="true"></i>this
							month
						</h5>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">
								This month
							</a>
							<a className="dropdown-item" href="#">
								This week
							</a>
							<a className="dropdown-item" href="#">
								Today
							</a>
							<a className="dropdown-item" href="#">
								Yesterday
							</a>
							<a className="dropdown-item" href="#">
								Last 7 days
							</a>
							<a className="dropdown-item" href="#">
								Last 30 days
							</a>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default DashboardSubHeaders;
