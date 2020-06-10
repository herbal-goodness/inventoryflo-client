import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

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
	) : null;

	return (
		<div
			className="chart-container"
			options={{
				responsive: true,
			}}>
			{lineChart}
		</div>
	);
};

export default OrdersChart;
