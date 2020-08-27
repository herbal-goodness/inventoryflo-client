import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Spinner } from "../utils/components";
import { months, days } from "./constants";

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

  useEffect(() => {
    //TODO: Build filters for each type;
    const filtererd =
      type === "today"
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
              allFridaysTotal[counter].push(filtererd[i + 1]);
            }
          } else {
            allFridaysTotal[counter] === undefined
              ? (allFridaysTotal[counter] = [filtererd[i]])
              : allFridaysTotal[counter].push(filtererd[i + 1]);
            counter++;
          }
        }
      }
    }
    const len = Object.values(allFridaysTotal).length;
    const data = Object.values(allFridaysTotal).map((arr, i) => {
      const price = arr.reduce((a, b) => {
        return {
          total_price: (+a.total_price || 0) + +b.total_price,
        };
      });

      const date = new Date(arr[0].created_at).getDate();
      const mont = months[new Date(arr[0].created_at).getMonth()];
      let label = "";

      if (len < 8) {
        label = `${date}-${mont}`;
      } else if (i % 2 !== 0) {
        label = `${date}-${mont}`;
      }

      return {
        total: Math.floor(price.total_price),
        label,
      };
    });
    setChartData(data);
  }, [salesAndOrders]);

  return (
    <div className="mb-1">
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
              return "Sales: $ " + tooltipItem.value;
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
      }}
    />
  );
}
