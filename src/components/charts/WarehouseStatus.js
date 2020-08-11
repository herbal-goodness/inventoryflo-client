import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const WarehouseStatus = () => {
  const [state, setState] = useState({
    labels: ["Warehouse 1", "Warehouse 2", "Warehouse 3"],
    datasets: [
      {
        label: "Available",
        backgroundColor: "#20846B",
        borderColor: "green",
        borderWidth: 1,
        data: [65, 159, 80],
      },
      {
        label: "Out of stock",
        backgroundColor: "#F7931E",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [65, 59, 80],
      },
    ],
  });

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Shopify US",
            fontSize: 15,
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

export default WarehouseStatus;
