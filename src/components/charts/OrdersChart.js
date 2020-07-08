import React from "react";
import { Line } from "react-chartjs-2";
import { Spinner, AlertDismissible } from "../utils/components";

const OrdersChart = ({ orders }) => {
	const lineChart = orders ? (
		<Line
			data={{
				labels: orders.map((order) => {
					return new Date(order.created_at).toLocaleDateString();
				}),
				datasets: [
					{
						data: orders.map((order) => {
							return order.line_items.map((item) => {
								return item.quantity;
							});
						}),
						label: "Quantity",
						backgroundColor: "rgba(247,247,247,0.75)",
						borderColor: "#2222ff",
						fill: true,
					},
					{
						data: orders.map((order) => {
							return order.total_price;
						}),
						label: "Price",
						backgroundColor: "rgba(131, 243, 237,0.75)",
						borderColor: "#2222ff",
						fill: true,
					},
				],
			}}
		/>
	) : (
		<h2>
			<Spinner />
		</h2>
	);

	return (
		<div
			className="chart-container mb-5"
			options={{
				responsive: true,
			}}>
			{lineChart}
		</div>
	);
};

export default OrdersChart;
