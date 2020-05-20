import { actionTypes } from "../actions/actionTypes";
const initState = {};
export const errorReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.GET_ERRORS:
			return action.payload;

		default:
			return state;
	}
};
