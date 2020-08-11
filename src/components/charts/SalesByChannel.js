import React, { useState, useEffect } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Button } from "react-bootstrap";
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
	text: "23%",
};

const SalesByChannel = () => {
	const [dataForChart, setDataForChart] = useState(dataFormat);
	const [price, setPrice] = useState(true);

	return (
		<div className="mb-5">
			{/* <h3 className="text-center flex-grow">Top Products</h3> */}

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
				height={300}
				width={300}
				data={dataForChart}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: true,
						text: "Sales By Channel",
						fontSize: 30,
						fontColor: "#20846B",
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

export default SalesByChannel;
