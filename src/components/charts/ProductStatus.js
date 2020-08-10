import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const ProductStatus = ({ data }) => {
  const chartData = {
    labels: ["Total Products", "Active Products", "Out of stock"],
    datasets: [
      {
        label: "Products Status",
        backgroundColor: [
          "rgba(242, 201, 76, 0.8)",
          "rgba(39, 174, 96, 0.8)",
          "rgba(247, 147, 30, 0.8)",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: data ? [data.totalProductCount, 35, 29] : [],
      },
    ],
  };
  return (
    <div>
      <div className="chart-container mb-5">
        <HorizontalBar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: " Shopify US",
                    fontSize: 15,
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
              xAxes: [
                {
                  gridLines: {
                    display: false,
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

export default ProductStatus;
