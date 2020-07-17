import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState, ColumnMenu } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Spinner } from "../../utils/components";

const StatefulGrid = withState(Grid);

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
            field="line_items"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {props.dataItem.line_items.map(({ sku }) => (
                  <span>{sku}</span>
                ))}
              </td>
            )}
            title="SKU"
            filterable={false}
          />
          <GridColumn
            field="customer.last_order_name"
            title="Item"
            filterable={false}
          />
          <GridColumn
            field="customer.first_name"
            title="Buyer"
            filterable={false}
          />
          <GridColumn
            field="processing_method"
            title="Ship Method"
            filterable={false}
          />
          <GridColumn
            field="total_price"
            filterable={false}
            filter="numeric"
            title="Total"
          />
          <GridColumn field="phone" title="Ships From" filterable={false} />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default OrdersTable;

// id(pin):2601872916647
// email(pin):"flowerkamb@yaho.com"
// created_at(pin):"2020-07-16T20:58:24-05:00"
// closed_at(pin):null
// total_price(pin):"85.94"
// subtotal_price(pin):"72.95"
// total_tax(pin):"0.00"
// taxes_included(pin):true
// currency(pin):"USD"
// financial_status(pin):"paid"
// confirmed(pin):true
// total_discounts(pin):"0.00"
// total_line_items_price(pin):"72.95"
// fulfillment_status(pin):null
// name(pin):"HP21577"
// total_price_usd(pin):"85.94"
// cancelled_at(pin):null
// processed_at(pin):"2020-07-16T20:58:23-05:00"
// phone(pin):null
// landing_site_ref(pin):null
// order_number(pin):21577
// processing_method(pin):"direct"
// checkout_id(pin):14421390229671
// order_status_url(pin):"https://www.herbalgoodnessco.com/8213479/orders/210762d497b57d0d715e80c8ec27719c/authenticate?key=f3ee348869a0870f97d5be177aa1dd78"
// presentment_currency(pin):"USD"
// fulfillments(pin):
// refunds(pin):
