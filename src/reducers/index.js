/* Reducer is used to update the store
The index file holds all the different reducers*/
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import errorReducer from "./errorReducer";
import signup from "../components/signup";
import login from "../components/signin";

export default combineReducers({
  signup: signup.reducer,
  login: login.reducer,
  products: productsReducer,
  errors: errorReducer,
});
