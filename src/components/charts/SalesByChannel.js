import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-labels";
import { getTotalPrice } from "../dashboard/functions";

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

const SalesByChannel = ({ isEmpty, data }) => {
  const [dataForPieChart, setDataForPieChart] = useState(pieData);

  useEffect(() => {
    if (data !== undefined && data.length > 0) {
      if (!isEmpty) {
        setDataForPieChart({
          ...dataForPieChart,
          labels: ["Shopify "],
          datasets: [
            {
              label: "Rainfall",
              backgroundColor: ["#F7931E"],
              hoverBackgroundColor: ["#501800"],
              data: [getTotalPrice(data)?.toFixed(2)],
            },
          ],
        });
      }
    }
    if (isEmpty) {
      setDataForPieChart({
        ...pieData,
        ...(pieData.datasets[0].data = [getTotalPrice(data)?.toFixed(2), 5, 5]),
      });
    }
  }, [isEmpty, data]);

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
            fontSize: 22,
            fontColor: "#20846B",
            fontFamily: "Lato",
          },
          legend: {
            display: true,
            position: "right",
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                let tooltipValue =
                  dataForPieChart.datasets[tooltipItem.datasetIndex].data[
                    tooltipItem.index
                  ];
                return "Sales: $ " + tooltipValue;
              },
              labelColor: function (tooltipItem, chart) {
                return {
                  backgroundColor: "#000000",
                };
              },
              labelTextColor: function (tooltipItem, chart) {
                return "#000000";
              },
            },
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "#000000",
            borderWidth: 1,
            titleFontColor: "#000000",
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
