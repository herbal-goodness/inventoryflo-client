import actionTypes from "./actionTypes";
const {
  REQUEST_SIGNUP,
  REQUEST_SUCCESS,
  SIGNUP_ERROR,
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
    case REQUEST_SIGNUP:
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
    case SIGNUP_ERROR:
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
