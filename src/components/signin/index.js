import Login from "./Login";
import sagas from "./sagas";
import * as loginReducer from "./reducer";
const { userInfo, reducer } = loginReducer;
export default { Login, sagas, reducer, userInfo };
