/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState, ColumnMenu } from "./withState";
import {
  GridColumn,
  Grid,
  GridDetailRow,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Spinner } from "../../utils/components";
import { filterBy } from "@progress/kendo-data-query";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Button } from "react-bootstrap";

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
const Table = ({ isLoading, sales, setExport, query }) => {
  const [wth, setWidth] = useState(0);
  const [cwth, setCat] = useState(0);
  const [toggle, setToggle] = useState(false);
  const filter = {
    logic: "or",
    filters: [
      { field: "title", operator: "contains", value: query },
      { field: "totalQuantity", operator: "contains", value: query },
      { field: "totalPrice", operator: "contains", value: query },
    ],
  };
  const addNew = (event) => {
    event.preventDefault();
    setToggle(!toggle);
    toggle && setWidth(100);
    !toggle && setWidth(0);
  };

  const addCat = (event) => {
    event.preventDefault();
    setToggle(!toggle);
    toggle && setCat(150);
    !toggle && setCat(0);
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
          style={{ height: "500px" }}
          expandField="expanded"
        >
          <GridToolbar>
            <Button
              title="Add sku"
              className="k-button k-secondary"
              onClick={addNew}
            >
              {wth === 0 ? "Add SKU" : "Hide SKU"}
            </Button>
            <Button
              title="Add sku"
              className="k-button k-secondary"
              onClick={addCat}
            >
              {cwth === 0 ? "Add Categories" : "Hide Categories"}
            </Button>
          </GridToolbar>
          <GridColumn
            field="image"
            title={" "}
            cell={DetailColumnCell}
            width="80px"
          />
          <GridColumn
            field=""
            width={wth}
            title="SKU"
            headerCell={(props) => (
              <h6 {...props}>
                <strong>SKU </strong>
              </h6>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field=""
            width={cwth}
            title="SKU"
            headerCell={(props) => (
              <h6 {...props}>
                <strong>Categories </strong>
              </h6>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            headerCell={(props) => (
              <h6 {...props}>
                <strong>Product </strong>
              </h6>
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
            headerCell={(props) => (
              <h6 {...props}>
                <strong>No. of variants </strong>
              </h6>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />

          <GridColumn
            field="totalQuantity"
            title="Available"
            filter="numeric"
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {(props.dataItem.totalQuantity &&
                  props.dataItem.totalQuantity) ||
                  "Out of stock"}
              </td>
            )}
            width={100}
            headerCell={(props) => (
              <h6 {...props}>
                <strong>Available</strong>
              </h6>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />

          <GridColumn
            field="totalPrice"
            title="Price"
            filter="numeric"
            width={100}
            headerCell={(props) => (
              <h6 {...props}>
                <strong>Price</strong>
              </h6>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="channel-listed"
            width={150}
            cell={(props) => (
              <td colSpan={props.colSpan}>
                <img
                  src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png?1341928631"
                  alt=""
                />
              </td>
            )}
            headerCell={(props) => (
              <h6 {...props}>
                <strong>Channels Listed</strong>
              </h6>
            )}
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field=""
            title=""
            width={150}
            headerCell={(props) => (
              <h6 {...props}>
                <strong>Warehouses</strong>
              </h6>
            )}
            cell={(props) => (
              <td>
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
