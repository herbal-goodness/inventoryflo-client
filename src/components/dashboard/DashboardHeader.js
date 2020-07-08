import React from "react";

const DashboardHeader = () => {
	return (
		<>
			<header className="d-flex justify-content-between mb-2 dashboard-header">
				<h2>
					<i className="fa fa-tachometer"></i> dashboard
				</h2>
				<h4>Last update less than a minute ago</h4>
			</header>
		</>
	);
};

export default DashboardHeader;
