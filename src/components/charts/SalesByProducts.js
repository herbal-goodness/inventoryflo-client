import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";

const dataFormat = {
	labels: [
		"Product 1",
		"Product 2",
		"Product 3",
		"Product 4",
		"Product 5",
		"Others",
	],
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
			data: [65, 59, 80, 70, 45, 30],
		},
	],
};

const SalesByProducts = () => {
	const [dataForChart, setDataForChart] = useState(dataFormat);

	return (
		<div className="mb-3">
			{/* <h3 className="text-center flex-grow">Top Products</h3> */}

			<Doughnut
				data={dataForChart}
				height={240}
				width={300}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: true,
						text: "Sales By Products",
						fontSize: 20,
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

export default SalesByProducts;
