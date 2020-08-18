import React from "react";
import ProductStatus from "../charts/ProductStatus";
import WarehouseStatus from "../charts/WarehouseStatus";
import DashboardSubHeaders from "../dashboard/DashboardSubHeaders";

const InventoryAnalysis = ({ data }) => {
	return (
		<div className="row pb-3 mx-2 mb-4 bg-white">
			<DashboardSubHeaders title="Inventory Analysis" />
			<div className="col-12 col-sm-12 col-md-6 d-size">
				<div className="row">
					<h2 className="col-12 col-sm-12 text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
						Product Status
					</h2>
					<div className="col-12 col-sm-12 sales-01 text-center text-green">
						<ProductStatus data={data} />
					</div>
				</div>
			</div>

			<div className="col-12 col-sm-12 col-md-6 d-size">
				<div className="row">
					{/* <div className="col-12 col-sm-12 sales-01 text-center text-green">
						Warehouse Status
					</div> */}
					<h2 className="col-12 col-sm-12 text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
						Warehouse Status
					</h2>
					<div className="col-12 col-sm-12 sales-01 text-center text-green">
						<WarehouseStatus />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InventoryAnalysis;
