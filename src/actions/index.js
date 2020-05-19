import { actionTypes } from "./actionTypes";
export const setProductsLoading = () => {
	type: actionTypes.LOAD_PRODUCTS;
};

export const getAllProducts = () => {
	return {
		type: actionTypes.GET_ALL_PRODUCTS,
	};
};

export const receiveProducts = (data) => {
	return {
		type: actionTypes.RECEIVE_PRODUCTS,
		payload: data,
	};
};
