import React from "react";

const SlowMovingProd = () => {
	return (
		<>
			<h2 className="text-medium-1 text-green text-center mt-1 mb-3 text-transform-bold">
				Slow moving products
			</h2>
			<div className="d-flex justify-content-between justify-items-center arrow-container  mb-4">
				<div className="text-right">
					<h2 className="text-large mb-3 text-dark">Product 1</h2>
					<h2 className="text-medium mb-3 text-dark">Product 2</h2>
					<h2 className="text-slim mb-3 text-dark">Product 3</h2>
				</div>
				<div className="v-arrow"></div>

				<div className="text-left">
					<h2 className="text-large mb-3 text-dark">1 Order</h2>
					<h2 className="text-medium mb-3 text-dark">2 Orders</h2>
					<h2 className="text-slim mb-3 text-dark">2 Orders</h2>
				</div>
			</div>
		</>
	);
};

export default SlowMovingProd;
