import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export class SalesChart extends Component {
	state = {
		data: {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [
				{
					label: "Months",
					backgroundColor: "rgba(247,247,247,0.75)",
					data: [4, 5, 1, 10, 32, 12, 34],
				},
				{
					label: "Sales Made",
					backgroundColor: "rgba(131, 243, 237,0.75)",
					data: [14, 15, 31, 0, 32, 12, 4],
				},
			],
		},
	};
	render() {
		return (
			<div className="chart-container mb-5">
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
