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
    img: namor.generate({ words: 2, numbers: 0 }),
    name: namor.generate({ words: 1, numbers: 0 }),
    sku: Math.floor(Math.random() * 1000),
    condition:
      statusChance > 0.66 ? "new" : statusChance > 0.33 ? "old" : "too old",
    location: Math.floor(Math.random() * 100),
    available: Math.floor(Math.random() * 100),
    reserved: Math.floor(Math.random() * 2),
    price: Math.floor(Math.random() * 1000),
    lastModified: namor.generate({ words: 1, numbers: 0 }),
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
