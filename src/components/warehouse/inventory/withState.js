import React from "react";
import {
  GridColumnMenuSort,
  GridColumnMenuFilter,
} from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";

export function withState(WrappedGrid) {
  return class StatefulGrid extends React.Component {
    constructor(props) {
      super(props);
      if (props.pageable === false) {
        this.state = {};
      } else {
        this.state = { skip: 0, take: 30 };
      }
    }

    render() {
      return (
        <WrappedGrid
          filterable={this.props.data[0]?.order_number ? false : true}
          sortable={true}
          pageable={{ pageSizes: true }}
          {...this.props}
          {...this.state}
          data={process(this.props.data, this.state)}
          resizable
          onDataStateChange={(e) => {
            this.setState(e.data);
          }}
        />
      );
    }
  };
}

export class ColumnMenu extends React.Component {
  render() {
    return (
      <div>
        <GridColumnMenuSort {...this.props} />
        <GridColumnMenuFilter {...this.props} />
      </div>
    );
  }
}
