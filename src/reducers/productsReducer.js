import { actionTypes } from "../actions/actionTypes";
const initState = {
	loading: false,
	data: {},
};
const productsReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_PRODUCTS:
			return {
				...state,
				loading: true,
				data: {}, //empty since data is still loading
			};
		case actionTypes.RECEIVE_PRODUCTS:
			return {
				...state,
				loading: false,

				data: action.payload,
			};

		default:
			return state;
	}
};
export default productsReducer;
