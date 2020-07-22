import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
	labels: [65, 60, 56],
	datasets: [
		{
			label: "Orders Status",
			backgroundColor: [
				"rgba(242, 201, 76, 0.8)",
				"rgba(39, 174, 96, 0.8)",
				"rgba(247, 147, 30, 0.8)",
			],
			borderColor: "rgba(255,99,132,1)",
			borderWidth: 1,
			// hoverBackgroundColor: "rgba(255,99,132,0.4)",
			hoverBorderColor: "rgba(255,99,132,1)",
			data: [43, 35, 29],
		},
	],
};

const OrderStatusChart = () => {
	return (
		<div>
			<div className="chart-container mb-5">
				<h3 className="p-4">Orders Status</h3>
				<HorizontalBar
					data={data}
					options={{
						responsive: true,
						scales: {
							yAxes: [
								{
									display: true,
									scaleLabel: {
										display: true,
										labelString: " Shopify US",
										fontSize: 20,
										fontColor: "#000000",
									},
									ticks: {
										mirror: true,
										padding: -90,
										fontSize: 22,
										fontColor: "#000000",
									},
								},
							],
						},
					}}
				/>
			</div>
		</div>
	);
};

export default OrderStatusChart;
