import React from "react";

const SalesAndOrdersParams = () => {
	return (
		<>
			<div className="d-flex justify-content-between sales-and-orders-params mb-4 py-1 px-3 justify-items-center">
				<h2 className="text-capitalize mr-2">total orders</h2>
				<div className="sales-data-wrapper">
					<span className="text-green sales-data mr-2">60</span>
					<span>
						<i
							className="fa fa-arrow-up text-green sales-data mr-1"
							aria-hidden="true"></i>
					</span>
					<span className="text-slim">2.5%</span>
				</div>
			</div>
		</>
	);
};

export default SalesAndOrdersParams;
