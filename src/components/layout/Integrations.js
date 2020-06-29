import React from "react";
import { Link } from "react-router-dom";
import Menu from "../layout/Menu";
import shopify from "../../images/shopify-logo.jpg";
import amazon from "../../images/amazon-logo.jpg";
import amazonfba from "../../images/amazon-fulfillment.jpg";
import efulfill from "../../images/efulfillment-logo.jpg";
import googledrive from "../../images/google-drive-logo.jpg";
import walmart from "../../images/walmart-logo.jpg";
import slack from "../../images/slack-logo.jpg";

const Integrations = () => {
	return (
		<div className="integrations">
			<Menu />
			<header className="integrations-header mt-5">
				<h1 className="text-capitalize text-center">integrations</h1>
			</header>
			<div className="container mt-5" id="integrations-container">
				<h2 className="text-center mb-5">eCommerce</h2>
				<div className="row mb-5">
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={shopify}
								alt="shopify"
								title="shopify"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">shopify</h2>

								<p className="card-text text-muted">
									Single place to track all your orders, stock levels, customer
									contacts, product details/images and more. Manage orders and
									inventory.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={amazon}
								alt="amazon"
								title="amazon"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">amazon</h2>

								<p className="card-text text-muted">
									Stay on top of sales orders and fulfilments and have stock
									levels updated in real-time with the Amazon integration.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={walmart}
								alt="walmart"
								title="walmart"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">walmart</h2>

								<p className="card-text text-muted">
									Manage the products and listings in the largest retailer in
									the world with over 80 million unique visitors
								</p>
							</div>
						</div>
					</div>
				</div>
				<h2 className="text-center mb-5">Shipping service integrations</h2>
				<div className="row mb-5">
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={amazonfba}
								alt="amazon FBA"
								title="amazon FBA"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">amazon FBA</h2>

								<p className="card-text text-muted">
									Inventoryflo synchronizes with the Amazon FBA so your stock
									levels will be accurate across all your warehouse locations.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={efulfill}
								alt="eFulfillment Service"
								title="eFulfillment Service"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">
									eFulfillment Service
								</h2>

								<p className="card-text text-muted">
									Inventoryflo synchronizes with the EFS to precisely track all
									the stocks and provides a monitor to check on your supplychain
								</p>
							</div>
						</div>
					</div>
				</div>
				<h2 className="text-center mb-5">Other service integrations</h2>
				<div className="row mb-5">
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={googledrive}
								alt="google drive"
								title="Google Drive"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">
									google drive
								</h2>
								<p className="card-text text-muted">
									Inventoryflo reports can be saved to the Google drive. Export
									manual batch sheets or files to visualize inventory and
									supplychain data.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="card mb-4 mx-sm-auto">
							<img
								className="card-img-top img-fluid"
								src={slack}
								alt="slack"
								title="slack"
							/>
							<div className="card-body">
								<h2 className="card-title text-capitalize py-0">slack</h2>

								<p className="card-text text-muted">
									Bring your team together by posting updates from inventoryflo
									to slack and update the organization with latest content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Integrations;
