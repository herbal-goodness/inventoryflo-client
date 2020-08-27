import React from "react";
import { months } from "../charts/constants";

const LargestOrders = ({ isEmpty, data }) => {
  return (
    <div className="text-center mb-4">
      <h2 className="text-medium-1 text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
        largest orders
      </h2>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col" className="font-weight-bold">
              Order#
            </th>
            <th scope="col" className="font-weight-bold">
              Order Dt
            </th>
            <th scope="col" className="font-weight-bold">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {isEmpty
            ? ""
            : data
                ?.sort((a, b) => +b.total_price - +a.total_price)
                .map(({ total_price, created_at, order_number }, index) => {
                  return (
                    index < 3 &&
                    total_price !== undefined && (
                      <tr>
                        <td>{order_number}</td>
                        <td>
                          {new Date(created_at).getDate()}{" "}
                          {months[new Date(created_at).getMonth()]}
                        </td>
                        <td>{total_price}</td>
                      </tr>
                    )
                  );
                })}
        </tbody>
      </table>
      {/* <h2 className="text-medium-alpha text-green text-center mt-1 mb-3 font-weight-bold text-capitalize">
				promotion with high sales <span>&gt; $200</span>
			</h2> */}
    </div>
  );
};

export default LargestOrders;
