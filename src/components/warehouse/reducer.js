const initialState = {
  error: false,
  loading: false,
  successful: false,
  products: null,
};

export default (state = initialState, actions) => {
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
      return initialState;

    default:
      return state;
  }
};
