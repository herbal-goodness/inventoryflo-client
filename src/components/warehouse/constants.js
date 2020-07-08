import namor from "namor";
import {
  filterGreaterThan,
  SelectColumnFilter,
  SliderColumnFilter,
  roundedMedian,
  NumberRangeColumnFilter,
} from "./inventory/functions";
const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single",
  };
};

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

export const TABLE_COLUMN = [
  {
    Header: "",
    accessor: "img",
  },
  {
    Header: "Name",
    accessor: "name",
    filter: "fuzzyText",
    aggregate: "count",
    Aggregated: ({ value }) => `${value} Names`,
  },
  {
    Header: "SKU",
    accessor: "sku",
    // Filter: SliderColumnFilter,
    // filter: "equals",
    // // Aggregate the average age of visitors
    // aggregate: "average",
    // Aggregated: ({ value }) => `${value} (avg)`,
  },
  {
    Header: "Condition",
    accessor: "consdition",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Location",
    accessor: "location",
    aggregate: "count",
    Aggregated: ({ value }) => `${value} Names`,
  },
  {
    Header: "Available",
    accessor: "available",
    Filter: SliderColumnFilter,
    filter: filterGreaterThan,
    // Use our custom roundedMedian aggregator
    aggregate: roundedMedian,
    Aggregated: ({ value }) => `${value} (med)`,
  },
  {
    Header: "Reserved",
    accessor: "reserved",
  },
  {
    Header: "Price",
    accessor: "price",
    Filter: NumberRangeColumnFilter,
    filter: "between",
    // Aggregate the sum of all visits
    aggregate: "sum",
    Aggregated: ({ value }) => `${value} (total)`,
  },
  {
    Header: "Last Modified",
    accessor: "lastModified",
  },
];
