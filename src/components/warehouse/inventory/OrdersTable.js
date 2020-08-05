import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Spinner } from "../../utils/components";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { filterBy } from "@progress/kendo-data-query";

const StatefulGrid = withState(Grid);
const Closed = () => (
  <div
    style={{
      width: "10px",
      height: "10px",
      borderRadius: " 50%",
      backgroundColor: "green",
    }}
  />
);
const Open = () => (
  <div
    style={{
      width: "10px",
      height: "10px",
      borderRadius: " 50%",
      backgroundColor: "red",
    }}
  />
);
const Canceled = () => (
  <div
    style={{
      width: "10px",
      height: "10px",
      borderRadius: " 50%",
      backgroundColor: "#003",
    }}
  />
);
const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const OrdersTable = ({
  isLoading,
  orders,
  setExport,
  query,
  status,
  filterChannel,
}) => {
  const filter = {
    logic: "or",
    filters: [
      // { field: "title", operator: "contains", value: query },
      { field: "line_items", operator: "contains", value: query },
      { field: "order_number", operator: "contains", value: query },
      { field: "status", operator: "contains", value: query },
      { field: "created_at", operator: "contains", value: query },
      { field: "shipping_lines", operator: "contains", value: query },
      { field: "total_price", operator: "contains", value: query },
      { field: "customer", operator: "contains", value: query },
    ],
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <ExcelExport data={status} ref={(exporter) => setExport(exporter)}>
        <StatefulGrid
          data={
            filterChannel.channel && filterChannel.channel !== "shopify"
              ? []
              : filterBy(status, filter)
          }
          filter={filter}
          style={{ height: "600px" }}
        >
          <GridColumn
            field="order_number"
            headerClassName="products-header"
            title={"Order #"}
            width={100}
            filterable={false}
          />
          <GridColumn
            field="created_at"
            title="Order Date"
            width={100}
            headerClassName="products-header"
            filterable={false}
          />
          <GridColumn
            field="status"
            title="Status"
            width={100}
            headerClassName="products-header"
            filterable={false}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.status === "Open" ? (
                  <span style={style}>
                    <Open />
                    Open
                  </span>
                ) : props.dataItem?.status === "Closed" ? (
                  <span style={style}>
                    <Closed /> Closed
                  </span>
                ) : (
                  <span style={style}>
                    <Canceled /> Canceled
                  </span>
                )}
              </td>
            )}
          />
          <GridColumn
            headerClassName="products-header"
            field={"line_items"}
            width={300}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.line_items.length > 1 ? (
                  <OverlayTrigger
                    style={{ width: "500px" }}
                    trigger="hover"
                    placement="right"
                    overlay={
                      <Popover
                        id="popover-basic"
                        color="#fff"
                        style={{ width: "500px" }}
                      >
                        <Popover.Content as="div">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">SKU</th>
                              </tr>
                            </thead>
                            <tbody>
                              {props.dataItem?.line_items.map(
                                ({ title, quantity, price, sku }, i) => (
                                  <tr key={i}>
                                    <td>{title.substr(0, 10)}...</td>
                                    <td>{quantity}</td>
                                    <td className="price">{price}</td>
                                    <td>{sku}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <span>(multiple items)</span>
                  </OverlayTrigger>
                ) : (
                  <OverlayTrigger
                    style={{ width: "500px" }}
                    trigger="hover"
                    placement="right"
                    overlay={
                      <Popover
                        id="popover-basic"
                        color="#fff"
                        style={{ width: "450px" }}
                      >
                        <Popover.Content as="div">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">SKU</th>
                              </tr>
                            </thead>
                            <tbody>
                              {props.dataItem?.line_items.map(
                                ({ title, quantity, price, sku }, i) => (
                                  <tr key={i}>
                                    <td>{title.substr(0, 10)}...</td>
                                    <td>{quantity}</td>
                                    <td className="price">{price}</td>
                                    <td>{sku}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <span>
                      {props.dataItem?.line_items.map(({ title }) => title)}
                    </span>
                  </OverlayTrigger>
                )}
              </td>
            )}
            title="Item"
            filterable={false}
          />
          <GridColumn
            field="shipping_lines"
            width={150}
            headerClassName="products-header"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.shipping_lines.map(({ source }, i) => (
                  <>
                    {
                      <img
                        key={i}
                        src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png?1341928631"
                        alt=""
                      />
                    }
                    <span>{"Shopify"}</span>
                  </>
                ))}
              </td>
            )}
            title="Channel"
            filterable={false}
          />

          <GridColumn
            field="total_price"
            width={100}
            filterable={false}
            headerClassName="products-header"
            className="price text-right"
            filter="numeric"
            title="Total"
          />
          <GridColumn
            field="customer"
            width={100}
            headerClassName="products-header"
            title="Buyer"
            filterable={false}
          />
          <GridColumn
            field="processing_method"
            width={100}
            title="Shipped Method"
            headerClassName="products-header"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.shipping_lines.map(({ title }, i) => (
                  <span key={i}>{title}</span>
                ))}
              </td>
            )}
            filterable={false}
          />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default OrdersTable;
