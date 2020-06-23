import actionTypes from "./actionTypes";
const {
  REQUEST_LOGIN,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_ERROR,
  RESET_SIGNIN_STATE,
  STORE_USER,
} = actionTypes;

const initialState = {
  loading: false,
  successful: false,
  userInfo: null,
  error: null,
};

export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
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
    case RESET_SIGNIN_STATE:
      return initialState;

    default:
      return state;
  }
};

const user = {};
export const userInfo = (state = user, actions) => {
  switch (actions.type) {
    case STORE_USER:
      return {
        ...state,
        successful: true,
        user: { ...state.user, ...actions.payload },
      };
    case "RESET_STATE":
      return user;

    default:
      return state;
  }
};
