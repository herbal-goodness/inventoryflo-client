import React from "react";
import sales1 from "../../images/sales-1.png";
import sales2 from "../../images/sales-2.png";
import sales3 from "../../images/sales-3.png";
import sales4 from "../../images/sales-4.png";

const Sales = () => {
	return (
		<section className="container-fluid sales-wrapper">
			<div className="sales container">
				<div className="row">
					<div className="col-lg-6 py-4">
						<div className="row">
							<div className="col-md-6 offset-3">
								<img src={sales1} alt="sales" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<img src={sales2} alt="sales" />
							</div>
							<div className="col-md-6">
								<img src={sales3} alt="sales" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 offset-3">
								<img src={sales4} alt="sales" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 py-4 pl-5">
						<div className="sales-content overflow-hidden">
							<h2>Single source of truth for your sales</h2>
							<p className="pb-2">Unify all eCommerce platforms</p>
							<p className="pb-2">Track ROI by analyzing the sales</p>
							<p className="pb-2">Review customer feedback</p>
							<p className="pb-2">
								Devise marketing startegies and customer targetting
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sales;
