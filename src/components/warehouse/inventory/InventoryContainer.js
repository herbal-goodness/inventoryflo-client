import React, { Component } from "react";
import { connect } from "react-redux";
import { receiveProducts } from "../../../actions";
import { Link } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import InventoryTable from "./InventoryTable";

import InventorySidePane from "./InventorySidePane";

export class InventoryContainer extends Component {
	componentDidMount() {
		this.props.receiveProducts();
	}
	render() {
		console.log(this.props.products);
		const data = this.props.products;
		return (
			<div className="container-fluid mx-auto main">
				<div className="row">
					<div className="col-md-3">
						<h2 className="filter-inv-header">filter inventory</h2>
						<InventorySidePane products={data} />
					</div>
					<div className="col-md-9">
						<header className="d-flex justify-content-between mb-2 dashboard-header">
							<h2>
								<i className="fa fa-cube"></i> inventory
							</h2>
							<h4>
								<Link to="" className="btn btn-outline-primary mr-2">
									<i
										className="fa fa-sign-out fa-fw mr-1"
										aria-hidden="true"></i>{" "}
									Import from CSV
								</Link>
								<Link to="" className="btn btn-info mr-2">
									<i
										className="fa fa-building fa-fw mr-1"
										aria-hidden="true"></i>{" "}
									Manage warehouses
								</Link>
								<Link to="" className="btn btn-outline-primary">
									<i
										className="fa fa-sign-out fa-fw mr-1"
										aria-hidden="true"></i>{" "}
									Export
								</Link>
							</h4>
						</header>
						<InventoryTable products={data} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products.get("productsQueryData"),
});

export default connect(mapStateToProps, { receiveProducts })(
	InventoryContainer
);
