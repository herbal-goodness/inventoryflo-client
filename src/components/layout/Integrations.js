import React, { useState } from "react";
import Menu from "../layout/Menu";
import shopify from "../../images/shopify-logo.jpg";
import amazon from "../../images/amazon-logo.jpg";
import amazonfba from "../../images/amazon-fulfillment.jpg";
import efulfill from "../../images/efulfillment-logo.jpg";
import googledrive from "../../images/google-drive-logo.jpg";
import walmart from "../../images/walmart-logo.jpg";
import slack from "../../images/slack-logo.jpg";
import Cards from "../commons/Cards";
import SectionTitle from "../commons/SectionTitle";
import Footer from "../commons/Footer";

const Integrations = () => {
	const [newComponent, setComp] = useState({ visible: true });
	const { visible } = newComponent;
	return (
		<div>
			{visible ? <Menu /> : null}
			<div className="integrations">
				<header className="integrations-header">
					<h1 className="text-capitalize text-center">integrations</h1>
				</header>
				<div className="container mt-5" id="integrations-container">
					<SectionTitle title="eCommerce" />
					<div className="row mb-5">
						<div className="col-lg-4 col-md-6">
							<Cards
								source={shopify}
								alternate="shopify"
								title="shopify"
								header="shopify">
								<p className="card-text text-muted">
									Single place to track all your orders, stock levels, customer
									contacts, product details/images and more. Manage orders and
									inventory.
								</p>
							</Cards>
						</div>

						<div className="col-lg-4 col-md-6">
							<Cards
								className="comingSoon"
								source={amazon}
								alternate="amazon"
								title="amazon"
								header="amazon">
								<h3 className="ribbon">
									<span>Coming Soon!!!</span>
								</h3>
								<p className="card-text text-muted">
									Stay on top of sales orders and fulfilments and have stock
									levels updated in real-time with the Amazon integration.
								</p>
							</Cards>
						</div>
						<div className="col-lg-4 col-md-6">
							<Cards
								source={walmart}
								alternate="walmart"
								title="walmart"
								header="walmart">
								<h3 className="ribbon">
									<span>Coming Soon!!!</span>
								</h3>
								<p className="card-text text-muted">
									Manage the products and listings in the largest retailer in
									the world with over 80 million unique visitors.
								</p>
							</Cards>
						</div>
					</div>
					<SectionTitle title="Shipping service integrations" />
					<div className="row mb-5">
						<div className="col-lg-4 col-md-6">
							<Cards
								source={amazonfba}
								alternate="amazon FBA"
								title="amazon FBA"
								header="amazon FBA">
								<h3 className="ribbon">
									<span>Coming Soon!!!</span>
								</h3>
								<p className="card-text text-muted">
									Inventoryflo synchronizes with the Amazon FBA so your stock
									levels will be accurate across all your warehouse locations.
								</p>
							</Cards>
						</div>
						<div className="col-lg-4 col-md-6">
							<Cards
								source={efulfill}
								alternate="eFulfillment Service"
								title="eFulfillment Service"
								header="eFulfillment Service">
								<h3 className="ribbon">
									<span>Coming Soon!!!</span>
								</h3>
								<p className="card-text text-muted">
									Inventoryflo synchronizes with the EFS to precisely track all
									the stocks and provides a monitor to check on your
									supplychain.
								</p>
							</Cards>
						</div>
					</div>
					<SectionTitle title="Other service integrations" />
					<div className="row mb-5">
						<div className="col-lg-4 col-md-6">
							<Cards
								source={googledrive}
								alternate="google drive"
								title="google drive"
								header="google drive">
								<h3 className="ribbon">
									<span>Coming Soon!!!</span>
								</h3>
								<p className="card-text text-muted">
									Inventoryflo reports can be saved to the Google drive. Export
									manual batch sheets or files to visualize inventory and
									supplychain data.
								</p>
							</Cards>
						</div>

						<div className="col-lg-4 col-md-6">
							<Cards
								source={slack}
								alternate="slack"
								title="slack"
								header="slack">
								<h3 className="ribbon">
									<span>Coming Soon!!!</span>
								</h3>
								<p className="card-text text-muted">
									Bring your team together by posting updates from inventoryflo
									to slack and update the organization with latest content.
								</p>
							</Cards>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Integrations;
