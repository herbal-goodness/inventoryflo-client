/* Reducer is used to update the store
The index file holds all the different reducers*/
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import { errorReducer } from "./errorReducer";

export default combineReducers({
	products: productsReducer,
	errors: errorReducer,
});
