import { Map, fromJS } from "immutable";
import { actionTypes } from "../actions/actionTypes";
const initState = Map({
	loading: false,
	productsQueryData: [],
});
const productsReducer = (state = initState, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.GET_ALL_PRODUCTS:
			return {
				...state,
				loading: true,
				productsQueryData: [], //empty since data is still loading
			};
		case actionTypes.RECEIVE_PRODUCTS:
			return state.merge({
				...state,
				loading: false,

				productsQueryData: fromJS(action.payload),
			});

		default:
			return state;
	}
};
export default productsReducer;
