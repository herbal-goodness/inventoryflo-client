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
        <Grid data={variants || []} scrollable="none">
          <GridColumn field="title" />
          <GridColumn
            field="sku"
            title={"SKU"}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {(props.dataItem.sku && props.dataItem.sku) || "No SKU found"}
              </td>
            )}
          />
          <GridColumn
            field="inventory_quantity"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {(props.dataItem.inventory_quantity !== 0 &&
                  props.dataItem.inventory_quantity) ||
                  "Out of stock"}
              </td>
            )}
            title="Available"
          />
          <GridColumn field="price" title="Price" />
        </Grid>
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
 * @param {object} param0
 */
const Table = ({ isLoading, sales, setExport, query }) => {
  const filter = {
    logic: "or",
    filters: [
      { field: "title", operator: "contains", value: query },
      { field: "totalQuantity", operator: "contains", value: query },
      { field: "totalPrice", operator: "contains", value: query },
    ],
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <ExcelExport data={sales} ref={(exporter) => setExport(exporter)}>
        <StatefulGrid
          data={filterBy(sales || [], filter)}
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
            width="80px"
          />
          <GridColumn
            className="products-td"
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Product
              </h5>
            )}
            field="title"
            title="Product"
            width="350px"
            columnMenu={ColumnMenu}
            filterable={false}
          />
          <GridColumn
            field="NoOfVariants"
            title="No. of variants"
            width={110}
            className="products-td"
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Variants
              </h5>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />

          <GridColumn
            field="totalQuantity"
            title="Available"
            filter="numeric"
            className="products-td"
            cell={(props) => (
              <td
                colSpan={props.colSpan}
                className={props.className}
                style={props.style}
              >
                {(props.dataItem.totalQuantity &&
                  props.dataItem.totalQuantity) ||
                  "Out of stock"}
              </td>
            )}
            width={100}
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Available
              </h5>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />

          <GridColumn
            field="totalPrice"
            title="Price"
            filter="numeric"
            className="products-td "
            width={100}
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Price
              </h5>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="product_type"
            title="Categories"
            className="products-td "
            width={120}
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Categories
              </h5>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="channel-listed"
            className="products-td "
            width={120}
            cell={(props) => (
              <td colSpan={props.colSpan}>
                <img
                  src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png?1341928631"
                  alt=""
                />
              </td>
            )}
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Channels
              </h5>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field=""
            title=""
            width={120}
            className="products-td"
            headerCell={(props) => (
              <h5 {...props} className="products-header">
                Warehouses
              </h5>
            )}
            cell={(props) => (
              <td className={props.className}>
                <h4>EFS</h4>
              </td>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default Table;
