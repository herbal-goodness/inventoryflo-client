import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState, ColumnMenu } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Spinner } from "../../utils/components";

const StatefulGrid = withState(Grid);

const Table = ({ isLoading, sales, setExport }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <ExcelExport data={sales} ref={(exporter) => setExport(exporter)}>
        <StatefulGrid data={sales || []} style={{ height: "600px" }}>
          <GridColumn
            field="image"
            title={" "}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                {console.log(props.dataItem)}
                {
                  <img
                    src={props.dataItem?.image.src}
                    alt={props.dataItem?.image.alt}
                  />
                }
              </td>
            )}
            filterable={false}
            sortable={false}
            width={50}
          />
          <GridColumn
            field="title"
            title="Product Name"
            width={200}
            filterable={false}
            className="truncate"
          />
          <GridColumn
            field="sku"
            title="SKU"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="inventory_management"
            title="Condition"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="fulfillment_service"
            title="Location"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="inventory_policy"
            title="Bin Location"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="inventory_quantity"
            title="Available"
            filter="numeric"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="vendor"
            title="On Hand"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="price"
            title="Price"
            filter="numeric"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="updated_at"
            title="Last Modified"
            filterable={false}
            columnMenu={ColumnMenu}
          />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default Table;
