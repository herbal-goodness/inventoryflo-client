import React from "react";

const TopCustByOrders = () => {
	return (
		<>
			<h2 className="text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
				top customers by orders
			</h2>
			<div className="d-flex justify-content-between justify-items-center arrow-container  mb-4">
				<div className="text-right">
					<h2 className="text-large mb-3 text-dark">23</h2>
					<h2 className="text-medium mb-3 text-dark">20</h2>
					<h2 className="text-slim mb-3 text-dark">15</h2>
					<h2 className="text-slim-1 mb-3 text-dark">14</h2>
					<h2 className="text-slim-2 mb-3 text-dark">10</h2>
				</div>
				<div className="v-arrow-2"></div>

				<div className="text-left">
					<h2 className="text-large mb-3 text-dark text-capitalize">
						jane brown
					</h2>
					<h2 className="text-medium mb-3 text-dark text-capitalize">
						mary diaz
					</h2>
					<h2 className="text-slim mb-3 text-dark text-capitalize">
						angel pharma
					</h2>
					<h2 className="text-slim-1 mb-3 text-dark text-capitalize">
						debby grant
					</h2>
					<h2 className="text-slim-2 mb-3 text-dark text-capitalize">
						chelsea rhodes
					</h2>
				</div>
			</div>
		</>
	);
};

export default TopCustByOrders;
