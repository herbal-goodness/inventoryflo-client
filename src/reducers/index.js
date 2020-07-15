/* Reducer is used to update the store
The index file holds all the different reducers*/
import Cookies from "js-cookie";
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import errorReducer from "./errorReducer";
import signup from "../components/signup";
import login from "../components/signin";
import inventory from "../components/warehouse";
import { purgeStoredState, PURGE } from "redux-persist";
import { persistConfig } from "../store";

const logout = (state = {}, action) => {
  if (action.type === "RESET_STATE") {
    Cookies.remove("refreshToken");
    purgeStoredState(persistConfig);
    localStorage.clear();
    action.payload.push("/");
    return state;
  }
  return state;
};

export default combineReducers({
  sales: inventory.sales,
  orders: inventory.orders,
  logout,
  signup: signup.reducer,
  login: login.reducer,
  userInfo: login.userInfo,
  products: productsReducer,
  errors: errorReducer,
});
