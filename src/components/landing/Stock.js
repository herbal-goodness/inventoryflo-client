import React from "react";
import factory from "../../images/factory.png";
import inventory from "../../images/inventory-1.png";

const Stock = () => {
	return (
		<section className="container-fluid stock-wrapper">
			<div className="stock container text-left">
				<h1 className="stock-header">Where is your stock?</h1>
				<div className="row">
					<div className="col-md-7 stock-header-content">
						<p>
							Tired of that one popular item going out of stock all the time?
						</p>
						<p>Or some raw materials being thrown away often?</p>
					</div>
					<div className="col-md-5">
						<img src={inventory} alt="inventory" className="mr-4" />
						<img src={factory} alt="factory" />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<h2>
							See how the inventory monitor features of our software can help
							you:
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 py-4">
						<div className="stock-content overflow-hidden">
							<p className="pb-2">
								Keep track of your current inventory in all warehouses
							</p>
							<p className="pb-2">
								Set benchmarks to keep out of stock issues under check
							</p>
							<p className="pb-2">Find the slack in the products &amp; goods</p>
							<p className="pb-2">Enable fast allocation of stock</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stock;
