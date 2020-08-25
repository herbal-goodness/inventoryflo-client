import React, { useEffect, useState } from "react";
import {} from "immutable";

const SlowMovingProd = ({ data, allSales }) => {
  const [allSlowProducts, setSlowProducts] = useState([]);

  useEffect(() => {
    const slowProducts = [];

    if (data !== undefined) {
      const sorted = data.sort((a, b) => {
        return +b.total_price - a.total_price;
      });

      let counter = 0;
      for (let i = 6; i > counter && sorted.length > 4; i--) {
        const item = sorted.pop();
        slowProducts.push(item);
        counter++;
      }

      const withDetailSlowProd = slowProducts.map(({ id }) => {
        const foundItems = allSales.filter((item) => id === item.id);
        return foundItems.length > 0 ? foundItems[0] : "";
      });

      slowProducts.length > 0 &&
        setSlowProducts(
          withDetailSlowProd.map(({ line_items }) => {
            return {
              name: line_items ? line_items[0]?.name : "",
              orderCount: line_items?.length,
            };
          })
        );
    }
  }, [data]);

  return (
    <>
      <h2 className="text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
        Slow moving products
      </h2>
      <div className="d-flex justify-content-between justify-items-center arrow-container  mb-4">
        <div className="text-right">
          <h2 className="text-large mb-3 text-dark">
            {allSlowProducts[0] !== "undefined"
              ? allSlowProducts[0]?.name.substr(0, 11)
              : ""}
          </h2>
          <h2 className="text-medium mb-3 text-dark">
            {allSlowProducts[1] !== "undefined"
              ? allSlowProducts[1]?.name.substr(0, 11)
              : ""}
          </h2>
          <h2 className="text-slim mb-3 text-dark">
            {allSlowProducts[2] !== "undefined"
              ? allSlowProducts[2]?.name.substr(0, 11)
              : ""}
          </h2>
        </div>
        <div className="v-arrow"></div>

        <div className="text-left">
          <h2 className="text-large mb-3 text-dark">
            {allSlowProducts[0] !== "undefined"
              ? `${allSlowProducts[0]?.orderCount || ""} Orders`
              : ""}
          </h2>
          <h2 className="text-medium mb-3 text-dark">
            {allSlowProducts[1] !== "undefined"
              ? `${allSlowProducts[1]?.orderCount || ""} Orders`
              : ""}
          </h2>
          <h2 className="text-slim mb-3 text-dark">
            {allSlowProducts[2] !== "undefined"
              ? `${allSlowProducts[2]?.orderCount || ""} Orders`
              : ""}
          </h2>
        </div>
      </div>
    </>
  );
};

export default SlowMovingProd;
