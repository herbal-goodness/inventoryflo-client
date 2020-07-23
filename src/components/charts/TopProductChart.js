import React, { useState, useEffect } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Button } from "react-bootstrap";
const dataFormat = {
  labels: [
    "Product1       $0000",
    "Product2       $000",
    "Product3       $000",
    "Product5       $000",
    "Product5       $000",
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
const TopProductChart = ({ data }) => {
  const [dataForChart, setDataForChart] = useState(dataFormat);
  const [price, setPrice] = useState(true);

  useEffect(() => {
    const labels = [];
    const quantities = [];

    if (data !== undefined) {
      data.forEach(({ name, quantity, total_price }) => {
        const type = price ? `$${total_price}` : `#${quantity}`;
        labels.push(`${name}       ${type}`);
        quantities.push(quantity);
      });
    }

    setDataForChart({
      ...dataForChart,
      ...(dataForChart.datasets[0].data = quantities),
      labels,
    });
  }, [data, price]);

  return (
    <div className="chart-container mb-5 pb-5">
      <div className="d-flex justify-content-around">
        <h3 className="p-4 flex-grow">Top Products</h3>
        <div className="pt-4">
          <Button onClick={() => setPrice(true)} className="btn mr-3">
            $Sold
          </Button>
          <Button onClick={() => setPrice(false)} className="btn">
            #Sold
          </Button>
        </div>
      </div>

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
        data={dataForChart}
        options={{
          title: {
            display: true,
            // text: "Products",
            fontSize: 50,
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
