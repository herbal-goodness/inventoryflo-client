import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Spinner } from "../../utils/components";

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
const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const OrdersTable = ({ isLoading, orders, setExport }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <ExcelExport data={orders} ref={(exporter) => setExport(exporter)}>
        <StatefulGrid data={orders || []} style={{ height: "600px" }}>
          <GridColumn
            field="order_number"
            title={"Order #"}
            filterable={false}
          />
          <GridColumn
            field="created_at"
            title="Order Date"
            filterable={false}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {new Date(props.dataItem?.created_at).toLocaleDateString()}
              </td>
            )}
          />
          <GridColumn
            field="fulfillment_status"
            title="Staus"
            filterable={false}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.fulfillment_status !== "fulfilled" ||
                (props.dataItem?.closed_at &&
                  props.dataItem?.financial_status === "paid") ? (
                  <span style={style}>
                    <Open />
                    Open
                  </span>
                ) : (
                  <span style={style}>
                    <Closed /> Closed
                  </span>
                )}
              </td>
            )}
          />
          <GridColumn
            field="line_items"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.line_items.map(({ sku }) => (
                  <span>{sku}</span>
                ))}
              </td>
            )}
            title="SKU"
            filterable={false}
          />
          <GridColumn
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.line_items.map(({ title }) => (
                  <span>{title.substr(0, 15)}</span>
                ))}
              </td>
            )}
            title="Item Purchased"
            filterable={false}
          />
          <GridColumn
            field="customer.first_name"
            title="Buyer"
            filterable={false}
          />
          <GridColumn
            field="shipping_lines"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.shipping_lines.map(({ source }) => (
                  <span>{source}</span>
                ))}
              </td>
            )}
            title="Ship Method"
            filterable={false}
          />
          <GridColumn
            field="processing_method"
            title="Shipped From"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem?.shipping_lines.map(({ title }) => (
                  <span>{title}</span>
                ))}
              </td>
            )}
            filterable={false}
          />
          <GridColumn
            field="total_price"
            filterable={false}
            filter="numeric"
            title="Total"
          />
          <GridColumn
            field="updated_at"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {new Date(props.dataItem?.updated_at).toLocaleDateString()}
              </td>
            )}
            title="Last Update"
            filterable={false}
          />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default OrdersTable;
