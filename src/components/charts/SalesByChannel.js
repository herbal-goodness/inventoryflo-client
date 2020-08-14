import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-labels";

const dataFormat = {
	labels: ["Shopify       45%", "Amazon       23%", "Walmart       32%"],
	datasets: [
		{
			label: "Rainfall",
			backgroundColor: ["#F7931E", "#20846B", "#27AE60"],
			hoverBackgroundColor: [
				"#501800",
				"#4B5000",
				"#35014F",
				// "#175000",
				// "#003350",
			],
			data: [65, 59, 80],
		},
	],
};
const pieData = {
	labels: ["Shopify", "Amazon", "Walmart"],
	datasets: [
		{
			label: "Rainfall",
			backgroundColor: ["#F7931E", "#20846B", "#27AE60"],
			hoverBackgroundColor: [
				"#501800",
				"#4B5000",
				"#35014F",
				// "#175000",
				// "#003350",
			],
			data: [65, 59, 80],
		},
	],
};

const SalesByChannel = () => {
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
						text: "Sales By Channel",
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

export default SalesByChannel;
