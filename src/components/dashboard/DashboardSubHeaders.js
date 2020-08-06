import React from "react";

const DashboardSubHeaders = ({ title }) => {
	return (
		<>
			<header className="d-flex justify-content-between mb-2 dashboard-sub-header">
				<h2>{title}</h2>
				<div className="d-flex justify-content-between">
					<h5 className="text-capitalize mr-4">all channels</h5>
					<h5 className="text-capitalize">
						<i className="fa fa-calendar mr-2" aria-hidden="true"></i>this month
					</h5>
				</div>
			</header>
			<hr />
		</>
	);
};

export default DashboardSubHeaders;
