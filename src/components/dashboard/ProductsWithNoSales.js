import React from "react";

const ProductsWithNoSales = () => {
	return (
		<>
			<div className="d-flex justify-content-between sales-and-orders-params mb-4 py-1 px-3 justify-items-center">
				<h2 className="text-capitalize mr-2">Products with no sales</h2>
				<div className="sales-data-wrapper">
					<span className="text-green sales-data mr-2">23</span>
				</div>
			</div>
		</>
	);
};

export default ProductsWithNoSales;
