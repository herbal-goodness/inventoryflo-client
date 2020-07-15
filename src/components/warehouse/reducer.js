const salesInitialState = {
  error: false,
  loading: false,
  successful: false,
  products: null,
};
const ordersInitialState = {
  error: false,
  loading: false,
  successful: false,
  userOrders: null,
};

export const sales = (state = salesInitialState, actions) => {
  switch (actions.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        loading: true,
        error: false,
        successful: false,
        products: null,
      };
    case "STORE_PRODUCTS":
      return {
        ...state,
        products: actions.payload,
        successful: true,
        loading: false,
        error: false,
      };
    case "PRODUCTS_ERROR":
      return {
        ...state,
        error: true,
        products: null,
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
        userOrders: null,
      };
    case "STORE_ORDERS":
      return {
        ...state,
        userOrders: actions.payload,
        successful: true,
        loading: false,
        error: false,
      };
    case "ORDERS_ERROR":
      return {
        ...state,
        error: true,
        userOrders: null,
        successful: false,
        loading: false,
      };
    case "RESET_STATE":
      return ordersInitialState;

    default:
      return state;
  }
};
