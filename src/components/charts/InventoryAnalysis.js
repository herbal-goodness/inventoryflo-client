import React, { useState, useEffect } from "react";
import ProductStatus from "../charts/ProductStatus";
import WarehouseStatus from "../charts/WarehouseStatus";
import DashboardSubHeaders from "../dashboard/DashboardSubHeaders";

const InventoryAnalysis = ({ data }) => {
  const [info, setDuration] = useState({ duration: [] });
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (data !== undefined) {
      setDuration({
        duration: data.filterByLast30Days,
      });
    }
  }, [data]);

  const handleChange = (e, type) => {
    if (type === "I&A" && data !== undefined)
      switch (e.target.value) {
        case "thisWeek":
          setDuration({
            duration: data.filterBythisWeek,
          });
          break;
        case "thisMonth":
          setDuration({
            duration: data.filterByMonthDate,
          });
          break;
        case "today":
          setDuration({
            duration: data.filterByToDay,
          });
          break;
        case "yesterday":
          setDuration({
            duration: data.filterByYesterday,
          });
          break;
        case "last7days":
          setDuration({
            duration: data.filterByLast7Days,
          });
          break;
        case "last30days":
          setDuration({
            duration: data.filterByLast30Days,
          });
          break;

        default:
          setDuration({
            duration: data.filterByLast30Days,
          });
          break;
      }
  };
  const handleChannelChange = (event) => {
    const { value } = event.target;
    if (value !== "shopify") {
      value !== "all" ? setEmpty(true) : setEmpty(false);
    } else {
      setEmpty(false);
    }
  };

  return (
    <div className="row pb-3 mb-4 bg-white">
      <DashboardSubHeaders
        type={"I&A"}
        handleChange={handleChange}
        handleChannelChange={handleChannelChange}
        title="Inventory Analysis"
      />
      <div className="col-12 col-sm-12 col-md-6 d-size">
        <div className="row">
          <h2 className="col-12 col-sm-12 text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
            Product Status
          </h2>
          <div className="col-12 col-sm-12 sales-01 text-center text-green">
            <ProductStatus data={!empty ? info.duration : []} />
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-6 d-size">
        <div className="row">
          {/* <div className="col-12 col-sm-12 sales-01 text-center text-green">
						Warehouse Status
					</div> */}
          <h2 className="col-12 col-sm-12 text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
            Warehouse Status
          </h2>
          <div className="col-12 col-sm-12 sales-01 text-center text-green">
            <WarehouseStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAnalysis;
