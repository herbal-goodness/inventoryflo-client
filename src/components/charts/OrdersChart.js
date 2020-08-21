import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Spinner } from "../utils/components";

function lastFiveDays(data) {
  //   const lastIndex = data && data.length - 1;
  //   const lastFiveDays = [];
  //   for (let i = lastIndex; i >= 0; i--) {
  //     if (lastFiveDays.length < 5) {
  //       lastFiveDays.push(data[i]);
  //     } else {
  //       break;
  //     }
  //   }
  return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

const OrdersChart = ({ salesAndOrders, type, totalPrice }) => {
  const [chartData, setChartData] = useState([]);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    //TODO: Build filters for each type;
    const filtererd =
      type === "last30days"
        ? salesAndOrders
            ?.filter(({ created_at }) => {
              const d = new Date((created_at && created_at) || "");
              const dayName = days[d.getDay()];
              return dayName === "Fri";
            })
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        : lastFiveDays(salesAndOrders);

    const allFridaysTotal = {};
    let counter = 0;
    if (filtererd?.length > 0) {
      for (let i = 0; i < filtererd.length - 1; i++) {
        const currentItemD =
          filtererd[i].created_at !== undefined &&
          new Date(filtererd[i].created_at);
        const nextItemD =
          filtererd[i + 1].created_at !== undefined
            ? new Date(filtererd[i + 1].created_at)
            : false;
        if (currentItemD) {
          if (
            new Date(currentItemD.toDateString()).getTime() ===
            new Date(nextItemD.toDateString()).getTime()
          ) {
            if (allFridaysTotal[counter] === undefined) {
              allFridaysTotal[counter] = [filtererd[i]];
            } else {
              allFridaysTotal[counter].push(filtererd[i]);
            }
          } else {
            allFridaysTotal[counter] === undefined
              ? (allFridaysTotal[counter] = [filtererd[i]])
              : allFridaysTotal[counter].push(filtererd[i]);
            counter++;
          }
        }
      }
    }
    const data = Object.values(allFridaysTotal).map((arr) => {
      const price = arr.reduce((a, b) => {
        return {
          total_price: (+a.total_price || 0) + +b.total_price,
        };
      });

      const date = new Date(arr[0].created_at).getDate();
      const mont = months[new Date(arr[0].created_at).getMonth()];
      return {
        total: Math.round(price.total_price),
        label: `${date}-${mont}`,
      };
    });
    setChartData(data);
  }, [salesAndOrders]);

  return (
    <div className="mb-5">
      <h3 className="text-right">
        ${totalPrice && totalPrice.toFixed(2)}
        <span>
          <i
            className="fa fa-arrow-up text-green sales-data mr-1"
            aria-hidden="true"
          ></i>
        </span>
        <span className="text-slim text-dark">XX%</span>
      </h3>
      {salesAndOrders === undefined ? (
        <Spinner />
      ) : (
        <LinChart chartData={chartData} />
      )}
    </div>
  );
};

export default OrdersChart;

function LinChart({ chartData }) {
  console.log(chartData);
  return (
    <Line
      data={{
        labels: Object.values(chartData)
          .map(({ label }) => label)
          .reverse(),

        datasets: [
          {
            data: Object.values(chartData)
              .map(({ total }) => total)
              .reverse(),
            backgroundColor: "rgba(131, 243, 237,0.75)",
            borderColor: "#2222ff",
            fill: false,
            lineTension: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: true,
                // labelString: "Days or time of the day",
                fontSize: 20,
                fontColor: "#000000",
              },
              ticks: {
                major: {
                  fontStyle: "bold",
                  fontColor: "#FF0000",
                },
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: " Revenue in $",
                fontSize: 20,
                fontColor: "#000000",
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
      }}
    />
  );
}
