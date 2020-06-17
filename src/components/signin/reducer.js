import actionTypes from "./actionTypes";
const {
  REQUEST_LOGIN,
  REQUEST_SUCCESS,
  LOGIN_ERROR,
  RESET_STATE,
} = actionTypes;

const initialState = {
  loading: false,
  successful: false,
  userInfo: null,
  error: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        userInfo: actions.payload,
        successful: true,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: actions.error,
        loading: false,
        successful: false,
      };
    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
