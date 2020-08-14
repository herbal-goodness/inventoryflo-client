import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-labels";

const pieData = {
	labels: ["Shopify", "Amazon", "Walmart"],
	datasets: [
		{
			label: "Rainfall",
			backgroundColor: [
				"#F2C94C",
				"#6FCF97",
				"#20846B",
				"#00715C",
				"#F7931E",
				"#C4C4C4",
			],
			hoverBackgroundColor: [
				"#C4C4C4",
				"#4B5000",
				"#35014F",
				"#175000",
				"#003350",
				"#0073e0",
			],
			data: [65, 59, 80, 90, 70, 40],
		},
	],
};

const SalesShareChart = () => {
	const [dataForPieChart, setDataForPieChart] = useState(pieData);

	return (
		<div className="mb-3">
			{/* <h3 className="text-center flex-grow">Top Products</h3> */}

			<Pie
				data={dataForPieChart}
				height={250}
				width={300}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: true,
						text: "Sales Share By Cities",
						fontSize: 20,
						fontColor: "#20846B",
					},
					legend: {
						display: true,
						position: "right",
					},
					plugins: {
						fontColor: "#fff",
					},
				}}
			/>
		</div>
	);
};

export default SalesShareChart;
