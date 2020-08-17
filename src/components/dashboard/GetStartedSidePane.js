import React from "react";

const GetStartedSidePane = () => {
	return (
		<>
			<div className="card dashboard-get-started-side-pane mb-4">
				<div className="card-header">Get started</div>
				<div className="card-body">
					<h5 className="card-title d-flex justify-content-between">
						<span className="small font-italic font-weight-bold">
							Link a listing to a product
						</span>
						<span>
							<i className="fa fa-tag font-icons" aria-hidden="true"></i>
						</span>
					</h5>
					<h5 className="card-title d-flex justify-content-between">
						<span className="small font-italic font-weight-bold text-capitalize">
							sync your Inventory
						</span>
						<span>
							<i className="fa fa-refresh font-icons" aria-hidden="true"></i>
						</span>
					</h5>
					<h5 className="card-title d-flex justify-content-between">
						<span className="small font-italic font-weight-bold">
							Check your orders and fulfill
						</span>
						<span>
							<i className="fa fa-truck font-icons" aria-hidden="true"></i>
						</span>
					</h5>
				</div>
			</div>
		</>
	);
};

export default GetStartedSidePane;
