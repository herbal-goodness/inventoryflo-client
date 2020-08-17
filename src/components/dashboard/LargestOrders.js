import React from "react";

const LargestOrders = () => {
	return (
		<div className="text-center">
			<h2 className="text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
				largest orders <span>&gt; $200</span>
			</h2>
			<table className="table table-borderless">
				<thead>
					<tr>
						<th scope="col" className="font-weight-bold">
							Order#
						</th>
						<th scope="col" className="font-weight-bold">
							Order Dt
						</th>
						<th scope="col" className="font-weight-bold">
							Value
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>10709</td>
						<td>July 11</td>
						<td>$234</td>
					</tr>
					<tr>
						<td>12506</td>
						<td>July 2</td>
						<td>$104</td>
					</tr>
				</tbody>
			</table>
			<h2 className="text-medium-1 text-green text-center mt-1 mb-3 text-transform-bold text-capitalize">
				promotion with high sales <span>&gt; $200</span>
			</h2>
		</div>
	);
};

export default LargestOrders;
