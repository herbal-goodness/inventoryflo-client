import { orders, sales, dashboard } from "./reducer";
import sagas from "./saga";
import ProductsTable from "./inventory/ProductsTable";

export default { orders, sales, dashboard, sagas, ProductsTable };
