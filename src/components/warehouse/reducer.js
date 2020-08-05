const salesInitialState = {
  error: false,
  loading: false,
  successful: false,
  products: [],
};
const ordersInitialState = {
  error: false,
  loading: false,
  successful: false,
  userOrders: [],
};
const dashboardInitialState = {
  error: false,
  loading: false,
  successful: false,
  data: null,
};

export const sales = (state = salesInitialState, actions) => {
  switch (actions.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        loading: true,
        error: false,
        successful: false,
        products: [],
      };
    case "STORE_PRODUCTS":
      return {
        ...state,
        products: actions.payload.products,
        categories: actions.payload.categories,
        successful: true,
        loading: false,
        error: false,
      };
    case "PRODUCTS_ERROR":
      return {
        ...state,
        error: true,
        products: [],
        successful: false,
        loading: false,
      };
    case "RESET_STATE":
      return salesInitialState;

    default:
      return state;
  }
};

export const orders = (state = ordersInitialState, actions) => {
  switch (actions.type) {
    case "GET_ORDERS":
      return {
        ...state,
        loading: true,
        error: false,
        successful: false,
        userOrders: [],
      };
    case "STORE_ORDERS":
      return {
        ...state,
        userOrders: actions.payload.orders,
        allStatus: actions.payload.allStatus,
        successful: true,
        loading: false,
        error: false,
      };
    case "ORDERS_ERROR":
      return {
        ...state,
        error: true,
        userOrders: [],
        successful: false,
        loading: false,
      };
    case "RESET_STATE":
      return ordersInitialState;

    default:
      return state;
  }
};

export const dashboard = (state = dashboardInitialState, actions) => {
  switch (actions.type) {
    case "GET_DASHBOARD_DATA":
      return {
        ...state,
        loading: true,
        error: false,
        successful: false,
        data: null,
      };
    case "STORE_DASHBOARD_DATA":
      return {
        ...state,
        data: { ...state.data, ...actions.payload },
        successful: true,
        loading: false,
        error: false,
      };
    case "DASHBOARD_DATA_ERROR":
      return {
        ...state,
        error: true,
        userOrders: null,
        successful: false,
        loading: false,
      };
    case "RESET_STATE":
      return dashboardInitialState;

    default:
      return state;
  }
};
