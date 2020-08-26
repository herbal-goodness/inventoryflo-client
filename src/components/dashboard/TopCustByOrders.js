import React from "react";

const TopCustByOrders = ({ topProducts, isEmpty }) => {
  console.log(topProducts);
  return (
    <>
      <h2 className="text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
        top customers
      </h2>
      <div className="d-flex justify-content-between justify-items-center arrow-container  mb-1">
        <div className="text-right">
          {isEmpty
            ? ""
            : topProducts?.map(({ total_price }, index) => {
                return (
                  <p
                    className={`${
                      index === 0
                        ? "text-large mb-3 mr-3 text-dark text-capitalize"
                        : index === 1
                        ? "text-medium mb-3 mr-3 text-dark text-capitalize"
                        : "text-slim mb-3 mr-3 text-dark text-capitalize"
                    } `}
                  >
                    ${total_price}
                  </p>
                );
              })}
        </div>
        <div className="v-arrow-2"></div>

        <div className="text-left">
          {isEmpty
            ? ""
            : topProducts.map(({ customer }, index) => {
                return (
                  <h2
                    className={`${
                      index === 0
                        ? "text-large mb-2 ml-3 text-dark text-capitalize"
                        : index === 1
                        ? "text-medium mb-3 ml-3 text-dark text-capitalize"
                        : "text-slim mb-2 ml-3 text-dark text-capitalize"
                    } `}
                  >
                    {customer}
                  </h2>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default TopCustByOrders;
