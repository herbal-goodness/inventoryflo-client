import React from "react";

const SalesDriversParams = ({ title, fig }) => {
	return (
		<>
			<div className="d-flex justify-content-around sales-and-orders-params mb-4 py-2 px-3 justify-items-center">
				<span className="text-capitalize mr-2 total-order-1">{title}</span>
				<div className="sales-data-wrapper">
					<span className="text-green sales-data mr-2">{fig}</span>
				</div>
			</div>
		</>
	);
};

export default SalesDriversParams;
