import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const getOutOfStocks = (products) => {
  console.log(products);
  return products.filter(
    ({ totalQuantity }) => totalQuantity === "Out of stock"
  );
};
const ProductStatus = ({ data }) => {
  const chartData = {
    labels: ["Total Products", "Active Products", "Out of stock"],
    datasets: [
      {
        label: "Products Status",
        backgroundColor: ["#20846B", "#F7931E", "#6FCF97"],
        borderColor: "green",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(39, 174, 96,0.4)",
        hoverBorderColor: "rgba(39, 174, 96,0.8)",
        data: data
          ? [
              data.length,
              data.length - getOutOfStocks(data).length,
              getOutOfStocks(data).length,
            ]
          : [],
      },
    ],
  };

  return (
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
                  fontSize: 15,
                  fontColor: "#000000",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
          tooltips: {
            callbacks: {
              title: function (tooltipItem, data) {
                return data["labels"][tooltipItem[0]["index"]];
              },
              label: function (tooltipItem, data) {
                return data["datasets"][0]["data"][tooltipItem["index"]];
              },
              afterLabel: function (tooltipItem, data) {
                var dataset = data["datasets"][0];
              },
            },
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default ProductStatus;
