/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState, ColumnMenu } from "./withState";
import { GridColumn, Grid, GridDetailRow } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Spinner } from "../../utils/components";
import { filterBy } from "@progress/kendo-data-query";

/**
 * Component that creates the details for each row on the table
 *
 */
class DetailComponent extends GridDetailRow {
  render() {
    const variants = this.props.dataItem?.variants;
    return (
      <>
        <table style={{ width: 400 }} class="table">
          <tbody>
            {variants.map(({ title, inventory_quantity, price, sku }, i) => (
              <tr key={i}>
                <td title={title} width={337}>
                  {title}
                </td>
                <td title={sku} width={110}>
                  {sku || "No SKU found"}
                </td>
                <td
                  className="text-right"
                  title={inventory_quantity}
                  width={100}
                >
                  {inventory_quantity}
                </td>
                <td title={price} width={100} className="price text-right">
                  {price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Grid resizable data={variants || []} scrollable="none">
          <GridColumn
            width={337}
            title="Variant name"
            field="title"
            headerClassName="products-sub-header"
          />
          <GridColumn
            width={110}
            field="sku"
            headerClassName="products-sub-header"
            title={"SKU"}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {(props.dataItem.sku && props.dataItem.sku) || "No SKU found"}
              </td>
            )}
          />
          <GridColumn
            width={105}
            field="inventory_quantity"
            headerClassName="products-sub-header"
            cell={(props) => (
              <td
                className="text-right"
                colSpan={props.colSpan}
                style={props.style}
              >
                {(props.dataItem.inventory_quantity !== 0 &&
                  props.dataItem.inventory_quantity) ||
                  "Out of stock"}
              </td>
            )}
            title="Available"
          />
          <GridColumn
            width={105}
            headerClassName="products-sub-header"
            className="price text-right"
            field="price"
            title="Price"
          />
        </Grid> */}
      </>
    );
  }
}

/**
 * Component that toggles the dropdown and passes appropriate data
 * @param {Object} props
 */
const DetailColumnCell = (props) => {
  const expandChange = (dataItem) => {
    dataItem.expanded = !dataItem.expanded;
  };

  let dataItem = props.dataItem;
  return (
    <td className="k-hierarchy-cell">
      {dataItem.expanded ? (
        <div className="d-flex justify-content-around">
          <img
            src={(props.dataItem.image && props.dataItem.image.src) || ""}
            alt={(props.dataItem.image && props.dataItem.image.alt) || ""}
          />
          <a
            onClick={() => expandChange(dataItem)}
            className="k-icon k-minus align-self-center"
            href="#"
            tabIndex="-1"
          ></a>
        </div>
      ) : (
        <div className="d-flex justify-content-around">
          <img
            className="product-image"
            src={(props.dataItem.image && props.dataItem.image.src) || ""}
            alt={(props.dataItem.image && props.dataItem.image.alt) || ""}
          />
          <a
            onClick={() => expandChange(dataItem)}
            className="k-icon k-plus align-self-center"
            href="#"
            tabIndex="-1"
          ></a>
        </div>
      )}
    </td>
  );
};

const StatefulGrid = withState(Grid);
/**
 * Table component
 * @param {object} props
 */
const Table = ({
  isLoading,
  sales,
  setExport,
  query,
  status,
  filterChannel,
}) => {
  const filter = {
    logic: "or",
    filters: [
      { field: "totalPrice", operator: "contains", value: query },

      {
        field: "totalQuantity",
        operator: "contains",
        value: query,
      },
      { field: "title", operator: "contains", value: query },
      { field: "product_type", operator: "contains", value: query },
    ],
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <ExcelExport data={sales} ref={(exporter) => setExport(exporter)}>
        <StatefulGrid
          data={
            filterChannel.channel && filterChannel.channel !== "shopify"
              ? []
              : filterBy((status.length > 0 && status) || sales, filter)
          }
          filter={filter}
          detail={DetailComponent}
          style={{ height: "600px" }}
          expandField="expanded"
        >
          <GridColumn
            className="products-td"
            field="image"
            title={" "}
            cell={DetailColumnCell}
            filterable={false}
            width="80px"
          />
          <GridColumn
            className="products-td"
            headerClassName="products-sub-header"
            field="title"
            title="Product"
            width="350px"
            // columnMenu={ColumnMenu}
            filterable={false}
          />
          <GridColumn
            field="NoOfVariants"
            title="Variants"
            width={110}
            className="products-td text-right"
            headerClassName="products-sub-header"
            filterable={false}
            // columnMenu={ColumnMenu}
          />

          <GridColumn
            field="totalQuantity"
            title="Available"
            filter="numeric"
            headerClassName="products-sub-header"
            className="products-td text-right"
            width={100}
            filterable={false}
            // columnMenu={ColumnMenu}
          />

          <GridColumn
            field="totalPrice"
            title="Price"
            filter="numeric"
            className="products-td price text-right"
            headerClassName="products-sub-header"
            width={100}
            filterable={false}
            // columnMenu={ColumnMenu}
          />
          <GridColumn
            field="product_type"
            title="Category"
            className="products-td"
            headerClassName="products-sub-header"
            width={120}
            filterable={false}
            // columnMenu={ColumnMenu}
          />
          <GridColumn
            field="channel-listed"
            className="products-td "
            headerClassName="products-sub-header"
            title="Channels"
            width={120}
            cell={(props) => (
              <td colSpan={props.colSpan}>
                <img
                  src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png?1341928631"
                  alt=""
                />
              </td>
            )}
            filterable={false}
            // columnMenu={ColumnMenu}
          />
          <GridColumn
            field=""
            title="Warehouses"
            width={120}
            className="products-td"
            headerClassName="products-sub-header"
            cell={(props) => (
              <td className={props.className}>
                <h4>EFS</h4>
              </td>
            )}
            filterable={false}
            // columnMenu={ColumnMenu}
          />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default Table;
