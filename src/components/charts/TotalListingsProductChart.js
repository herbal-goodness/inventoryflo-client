// import React, { Component } from 'react'
// import { HorizontalBar } from 'react-chartjs-2';

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'My First dataset',
//             backgroundColor: 'rgba(255,99,132,0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             data: [65, 59, 80, 81, 56, 55, 40]
//         }
//     ]
// };

// export class TotalListingsProductChart extends Component {

//     render() {
//         return (
//             <div>
//                 <h2>Horizontal Bar Example</h2>
//                 <HorizontalBar data={data} />

//             </div>
//         )
//     }
// }

// export default TotalListingsProductChart

import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
	labels: [78, 60, 56],
	datasets: [
		{
			label: "Product Listings",
			backgroundColor: [
				"rgba(242, 201, 76, 0.9)",
				"rgba(39, 174, 96, 0.9)",
				"rgba(247, 147, 30, 0.9)",
			],
			borderColor: "rgba(255,99,132,1)",
			borderWidth: 1,
			hoverBackgroundColor: "rgba(255,99,132,0.4)",
			hoverBorderColor: "rgba(255,99,132,1)",
			data: [65, 59, 75],
		},
	],
};

const TotalListingsProductChart = () => {
	return (
		<div>
			<div className="chart-container mb-5">
				<h3 className="p-4">Total listings and Products</h3>
				<HorizontalBar data={data} />
			</div>
		</div>
	);
};

export default TotalListingsProductChart;
