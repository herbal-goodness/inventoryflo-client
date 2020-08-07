import React from "react";
import { Line } from "react-chartjs-2";
import { Spinner, AlertDismissible } from "../utils/components";

const OrdersChart = ({ orders }) => {
	const lineChart =
		orders === null ? (
			<Spinner />
		) : (
			<Line
				data={{
					labels: orders.map((order) => {
						return new Date(order.created_at).toLocaleDateString();
					}),
					datasets: [
						// {
						// 	data: orders.map((order) => {
						// 		return order.line_items.map((item) => {
						// 			return item.quantity;
						// 		});
						// 	}),
						// 	label: "Quantity",
						// 	backgroundColor: "rgba(247,247,247,0.75)",
						// 	borderColor: "#2222ff",
						// 	fill: true,
						// },
						{
							data: orders.map((order) => {
								return order.total_price;
							}),
							// label: "Price",
							backgroundColor: "rgba(131, 243, 237,0.75)",
							borderColor: "#2222ff",
							fill: false,
						},
					],
				}}
				// options={{
				// 	responsive: true,
				// 	title: {
				// 		display: true,
				// 		text: "Quantity sold or $ value",
				// 		position: "left",
				// 	},
				// }}
				options={{
					responsive: true,
					scales: {
						xAxes: [
							{
								display: true,
								gridLines: {
									display: false,
								},
								scaleLabel: {
									display: true,
									// labelString: "Days or time of the day",
									fontSize: 20,
									fontColor: "#000000",
								},
								ticks: {
									major: {
										fontStyle: "bold",
										fontColor: "#FF0000",
									},
								},
							},
						],
						yAxes: [
							{
								display: true,
								scaleLabel: {
									display: true,
									labelString: " Revenue in $",
									fontSize: 20,
									fontColor: "#000000",
								},
							},
						],
					},
					legend: {
						display: false,
					},
					tooltips: {
						callbacks: {
							label: function (tooltipItem) {
								return tooltipItem.yLabel;
							},
						},
					},
					// title: {
					// 	display: true,
					// 	text: "$135,364.98",
					// 	fontSize: 20,
					// 	fontColor: "#aaaaaa",
					// 	textAlign: "right",
					// },
				}}
			/>
		);

	return (
		<div className="mb-5">
			<h3 className="text-right">
				$135,364.98{" "}
				<span>
					<i
						className="fa fa-arrow-up text-green sales-data mr-1"
						aria-hidden="true"></i>
				</span>
				<span className="text-slim">2.5%</span>
			</h3>
			{lineChart}
		</div>
	);
};

export default OrdersChart;
