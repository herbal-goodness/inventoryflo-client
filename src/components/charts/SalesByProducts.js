import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";
import { getTotalPrice } from "../dashboard/functions";

const dataFormat = {
  //   labels: [
  //     "Product 1",
  //     "Product 2",
  //     "Product 3",
  //     "Product 4",
  //     "Product 5",
  //     "Others",
  //   ],
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

const SalesByProducts = ({ data, allSales, setTopProducts, isEmpty }) => {
  const [dataForChart, setDataForChart] = useState(dataFormat);
  //   const [price, setPrice] = useState(true);

  useEffect(() => {
    const others = [];
    const topProductIds = [];
    const ordersWithCustNameIds = [];

    if (data !== undefined) {
      const sorted = data.sort((a, b) => {
        return +b.total_price - a.total_price;
      });

      sorted.forEach((el, i) => {
        el.total_price !== undefined && ordersWithCustNameIds.push(el.id);
        if (i < 6 && el.total_price !== undefined) {
          topProductIds.push(el.id);
        } else {
          others.push(el);
        }
      });

      const topProducts = topProductIds.map((id) => {
        const foundItems = allSales.filter((item) => id === item.id);
        return foundItems.length > 0 ? foundItems[0] : "";
      });
      const ordersWithCustName = ordersWithCustNameIds.map((id) => {
        const foundItems = allSales.filter((item) => id === item.id);
        return foundItems.length > 0 ? foundItems[0] : "";
      });

      const othersTotal =
        others.length > 0 && getTotalPrice(others)?.toFixed(2);
      const labels = [
        ...topProducts.map(({ line_items }) =>
          line_items ? line_items[0].name.substr(0, 11) : ""
        ),
        "others",
      ];

      setTopProducts({ topProducts, ordersWithCustName });

      setDataForChart({
        ...dataForChart,
        ...(dataForChart.datasets[0].data = [
          ...topProducts.map(({ total_price }) => +total_price),
          othersTotal,
        ]),
        labels,
      });

      //   slowProducts.length > 0 && setSlowProducts(slowProducts);
    }
  }, [data]);

  return (
    <div className="mb-3">
      {/* <h3 className="text-center flex-grow">Top Products</h3> */}

      <Doughnut
        data={isEmpty ? [] : dataForChart}
        height={240}
        width={300}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Sales By Products",
            fontSize: 22,
            fontColor: "#20846B",
            fontFamily: "Lato",
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
