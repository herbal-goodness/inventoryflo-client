/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridDetailRow,
} from "@progress/kendo-react-grid";

import products from "./products.json";

class DetailComponent extends GridDetailRow {
  render() {
    const dataItem = this.props.dataItem;
    return (
      <section>
        <p>
          <strong>In Stock:</strong> {dataItem.UnitsInStock} units
        </p>
        <p>
          <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
        </p>
        <p>
          <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
        </p>
        <p>
          <strong>Discontinued:</strong> {dataItem.Discontinued}
        </p>
        <p>
          <strong>Category:</strong> {dataItem.Category.CategoryName} -{" "}
          {dataItem.Category.Description}
        </p>
      </section>
    );
  }
}

class DetailColumnCell extends React.Component {
  render() {
    let dataItem = this.props.dataItem;
    if (dataItem.ProductID % 2) {
      return <td className="k-hierarchy-cell" />;
    }
    return (
      <td className="k-hierarchy-cell">
        {dataItem.expanded ? (
          <a
            onClick={() => this.props.expandChange(dataItem)}
            className="k-icon k-minus"
            href="#"
            tabIndex="-1"
          ></a>
        ) : (
          <a
            onClick={() => this.props.expandChange(dataItem)}
            className="k-icon k-plus"
            href="#"
            tabIndex="-1"
          ></a>
        )}
      </td>
    );
  }
}

class MyHeaderCell extends React.Component {
  render() {
    return <th className="k-header k-hierarchy-cell k-header">Test</th>;
  }
}

class App extends React.Component {
  state = {
    data: products.map((item) => {
      item.expanded = false;
      return item;
    }),
  };

  MyCell = (props) => (
    <DetailColumnCell {...props} expandChange={this.expandChange} />
  );

  expandChange = (dataItem) => {
    dataItem.expanded = !dataItem.expanded;
    this.forceUpdate();
  };

  render() {
    return (
      <Grid
        data={this.state.data}
        detail={DetailComponent}
        expandField={"expanded"}
        style={{ height: "700px" }}
      >
        <Column
          field="expanded"
          cell={this.MyCell}
          width="80px"
          headerCell={MyHeaderCell}
        />
        <Column field="ProductName" title="Product" width="300px" />
        <Column field="ProductID" title="ID" width="50px" />
        <Column field="UnitPrice" title="Unit Price" width="100px" />
        <Column field="QuantityPerUnit" title="Qty Per Unit" />
      </Grid>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("my-app"));
