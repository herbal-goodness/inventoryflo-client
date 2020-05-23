import React, { Component } from "react";
import { connect } from "react-redux";
import { receiveProducts } from "../../actions";

export class InventoryTable extends Component {
	componentDidMount() {
		this.props.receiveProducts();
	}

	render() {
		const { data } = this.props.products;

		console.log(data);
		// const showProducts = () => {
		// 	if (data) {
		// 		return data.map((eachData, index) => (
		// 			<tr key={index}>
		// 				<td>{eachData.title}</td>
		// 				<td>{eachData.product_type}</td>
		// 				<td>
		// 					{eachData.variants.map((item) => {
		// 						return item.price;
		// 					})}
		// 				</td>
		// 				<td>{eachData.created_at}</td>
		// 			</tr>
		// 		));
		// 	} else {
		// 		return <h2>Loading...</h2>;
		// 	}
		// };
		return (
			<>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">
								<div className="checkbox">
									<input id="checkbox1" type="checkbox" />
									<label htmlFor="checkbox1"></label>
								</div>
							</th>
							<th scope="col">Name</th>
							<th scope="col">SKU</th>
							<th scope="col">Condition</th>
							<th scope="col">Available</th>
							<th scope="col">Reserved</th>
							<th scope="col">On Hand</th>
							<th scope="col">Price</th>
							<th scope="col">Last Modified</th>
						</tr>
					</thead>
					<tbody>
						{/* {showProducts()} */}
						<tr>
							<td>
								<div className="checkbox">
									<input id="checkbox1" type="checkbox" />
									<label for="checkbox1"></label>
								</div>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>
								<div className="checkbox">
									<input id="checkbox2" type="checkbox" checked />
									<label for="checkbox2"></label>
								</div>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>
								<div class="checkbox">
									<input id="checkbox3" type="checkbox" />
									<label for="checkbox3"></label>
								</div>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>
								<div class="checkbox">
									<input id="checkbox4" type="checkbox" checked />
									<label for="checkbox4"></label>
								</div>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>
								<div class="checkbox">
									<input id="checkbox5" type="checkbox" />
									<label for="checkbox5"></label>
								</div>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>
								<div class="checkbox">
									<input id="checkbox6" type="checkbox" checked />
									<label for="checkbox6"></label>
								</div>
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
					</tbody>
				</table>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products,
});

export default connect(mapStateToProps, { receiveProducts })(InventoryTable);
