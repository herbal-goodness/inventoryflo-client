import React from "react";

const SalesAndOrdersParamTwo = ({ title, figure, percentage }) => {
	return (
		<div className="sales-data-wrapper-2 text-center p-2 mb-4">
			<div>
				<span className="text-green sales-data mr-2">{figure}</span>
				<span>
					<i
						className="fa fa-arrow-up text-green sales-data mr-1"
						aria-hidden="true"></i>
				</span>
				<span className="text-slim">{percentage}</span>
			</div>
			<h2 className="text-capitalize">{title}</h2>
		</div>
	);
};

export default SalesAndOrdersParamTwo;
