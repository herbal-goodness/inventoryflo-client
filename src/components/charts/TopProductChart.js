import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
const data = {
	labels: [
		"Product1       $1234",
		"Product2       $999",
		"Product3       $888",
		"Product5       $777",
		"Product5       $100",
	],
	datasets: [
		{
			label: "Rainfall",
			backgroundColor: ["#F7931E", "#C4C4C4", "#F2C94C", "#20846B", "#27AE60"],
			hoverBackgroundColor: [
				"#501800",
				"#4B5000",
				"#175000",
				"#003350",
				"#35014F",
			],
			data: [65, 59, 80, 81, 56],
		},
	],
};

const TopProductChart = () => {
	return (
		<div className="chart-container mb-5">
			<h3 className="p-4">Top Products</h3>
			{/* <Pie
				data={data}
				options={{
					title: {
						display: true,
						text: "Average Rainfall per month",
						fontSize: 20,
					},
					legend: {
						display: true,
						position: "right",
					},
				}}
			/> */}
			<Doughnut
				data={data}
				options={{
					title: {
						display: true,
						// text: "Products",
						fontSize: 30,
					},
					legend: {
						display: true,
						position: "right",
					},
				}}
			/>
		</div>
	);
};

export default TopProductChart;
