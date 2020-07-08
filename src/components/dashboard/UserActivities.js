import React from "react";

const UserActivities = () => {
	return (
		<div className="d-flex flex-row justify-content-between align-items-center user-activities mb-4">
			<div className="col-md-3 p-3">
				<div className="content">$1,111</div>
				<p className="pt-2 text-center">Sales Month to date</p>
			</div>
			<div className="col-md-3 p-3">
				<div className="content">30</div>
				<p className="pt-2 text-center">Orders month to date</p>
			</div>
			<div className="col-md-3 p-3">
				<div className="content">5</div>
				<p className="pt-2 text-center">Cancelled orders</p>
			</div>
			<div className="col-md-3 p-3">
				<div className="content">12</div>
				<p className="pt-2 text-center">Orders to be fulfilled</p>
			</div>
		</div>
	);
};

export default UserActivities;
