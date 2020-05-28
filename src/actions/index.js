import { actionTypes } from "./actionTypes";
export const setProductsLoading = () => {
	return { type: actionTypes.LOAD_PRODUCTS };
};

export const getAllProducts = () => {
	return {
		type: actionTypes.GET_ALL_PRODUCTS,
	};
};

export const receiveProducts = (products) => {
	//products will come from API call in the productSagas
	return {
		type: actionTypes.RECEIVE_PRODUCTS,
		payload: products,
	};
};
