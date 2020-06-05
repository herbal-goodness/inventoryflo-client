import React, { Component } from "react";
// import { connect } from "react-redux";
// import { receiveProducts } from "../../../actions";
import { Link } from "react-router-dom";
import Spinner from "../../utils/Spinner";

export class InventoryTable extends Component {
	// componentDidMount() {
	// 	this.props.receiveProducts();
	// }

	render() {
		const { products } = this.props;
		// console.log(this.props.products);
		// const data = this.props.products;

		const showProducts = () => {
			if (products) {
				return products.map((eachData, index) => (
					<tr key={index}>
						<td>
							<input type="checkbox" class="form-check-input" />
						</td>
						<td>
							<img
								src={eachData.toJS().image.src}
								alt={eachData.toJS().image.alt}
							/>
						</td>
						<td className="truncate">{eachData.toJS().title}</td>
						<td>{eachData.toJS().id}</td>
						<td>{eachData.toJS().product_type}</td>
						<td>
							{eachData.toJS().variants.map((item) => {
								return item.inventory_quantity;
							})}
						</td>
						<td>
							$
							{eachData.toJS().variants.map((item) => {
								return item.price;
							})}
						</td>
					</tr>
				));
			} else {
				return <Spinner />;
			}
		};
		return (
			<>
				<div class="card">
					<div class="card-header">Inventory Table</div>
					<div class="card-body">
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">
										<div className="checkbox">
											<input type="checkbox" class="form-check-input" />
											<label htmlFor="checkbox1"></label>
										</div>
									</th>
									<th scope="col"></th>
									<th scope="col">Name</th>
									<th scope="col" className="sku">
										SKU
									</th>
									<th scope="col">
										<Link to="">category</Link>
									</th>
									<th scope="col">
										<Link to="">quantity</Link>
									</th>
									<th scope="col">Price</th>
								</tr>
							</thead>
							<tbody>{showProducts()}</tbody>
						</table>
					</div>
				</div>
			</>
		);
	}
}

// const mapStateToProps = (state) => ({
// 	products: state.products.get("productsQueryData"),
// });

// export default connect(mapStateToProps, { receiveProducts })(InventoryTable);
export default InventoryTable;
