import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Spinner } from "../utils/components";
import { months } from "./constants";
import classnames from "classnames";

function spreadDataByTime(data) {
  const dailySumTotal = {};
  let counter = 0;
  if (data?.length > 0) {
    for (let i = 0; i < data.length - 1; i++) {
      const currentItemTime =
        data[i].created_at !== undefined && new Date(data[i].created_at);
      const nextItemTime =
        data[i + 1].created_at !== undefined
          ? new Date(data[i + 1].created_at)
          : false;
      if (currentItemTime) {
        if (currentItemTime.getHours() === nextItemTime.getHours()) {
          if (dailySumTotal[counter] === undefined) {
            dailySumTotal[counter] = [data[i]];
          } else {
            dailySumTotal[counter].push(data[i + 1]);
          }
        } else {
          dailySumTotal[counter] === undefined
            ? (dailySumTotal[counter] = [data[i]])
            : dailySumTotal[counter].push(data[i + 1]);
          counter++;
        }
      }
    }
  }
  return dailySumTotal;
}

const OrdersChart = ({ salesAndOrders, type, totalPrice, isNegative }) => {
  const [chartData, setChartData] = useState([]);
  const copyOfsalesAndOrders = [...salesAndOrders];
  useEffect(() => {
    //TODO: Build filters for each type;
    const filtererd =
      type !== "today" &&
      copyOfsalesAndOrders.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

    const dailySumTotal =
      type === "today" ? spreadDataByTime(copyOfsalesAndOrders) : {};
    let counter = 0;
    if (type !== "today" && filtererd?.length > 0) {
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
            if (dailySumTotal[counter] === undefined) {
              dailySumTotal[counter] = [filtererd[i]];
            } else {
              dailySumTotal[counter].push(filtererd[i + 1]);
            }
          } else {
            dailySumTotal[counter] === undefined
              ? (dailySumTotal[counter] = [filtererd[i]])
              : dailySumTotal[counter].push(filtererd[i + 1]);
            counter++;
          }
        }
      }
    }
    // const len = Object.values(dailySumTotal).length;
    const data = Object.values(dailySumTotal).map((arr, i) => {
      const price = arr.reduce((a, b) => {
        return {
          total_price: (+a.total_price || 0) + +b.total_price,
        };
      });

      const date = new Date(arr[0].created_at).getDate();
      const mont = months[new Date(arr[0].created_at).getMonth()];
      let label = `${date}-${mont}`;

      // if (len > 15) {
      //   label = ;
      // }

      // if (len < 15) {
      //   label = `${date}-${mont}`;
      // }
      return {
        total: Math.floor(price.total_price),
        label:
          type !== "today"
            ? label
            : new Date(arr[0].created_at).toLocaleTimeString(),
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
            className={classnames(
              {
                "fa fa-arrow-up text-green sales-data mr-1": !isNegative(
                  salesAndOrders[0]?.salesChange &&
                    salesAndOrders[0]?.salesChange
                ),
              },
              {
                "fa fa-arrow-down text-red sales-data mr-1": isNegative(
                  salesAndOrders[0]?.salesChange &&
                    salesAndOrders[0]?.salesChange
                ),
              }
            )}
            aria-hidden="true"
          ></i>
        </span>
        <span className="text-slim text-dark">
          {salesAndOrders[0]?.salesChange
            ? salesAndOrders[0]?.salesChange
            : "XX%"}
        </span>
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
