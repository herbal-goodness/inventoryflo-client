import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export class SalesChart extends Component {
	state = {
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "Sales Made",
					backgroundColor: "rgba(131, 243, 237,0.75)",
					borderColor: "#2222ff",
					data: [74, 50, 71, 20, 62, 52, 70, 0],
					fill: false,
				},
			],
		},
	};
	render() {
		return (
			<div className="chart-container mb-5">
				<h3 className="p-4">Sales Trend</h3>
				<Line
					options={{
						responsive: true,
					}}
					data={this.state.data}
				/>
			</div>
		);
	}
}

export default SalesChart;
