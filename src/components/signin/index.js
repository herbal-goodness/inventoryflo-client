import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import RequestForgotPasswordCode from "./RequestForgotPasswordCode";
import sagas from "./sagas";
import * as loginReducer from "./reducer";
const { userInfo, reducer } = loginReducer;

export default {
  RequestForgotPasswordCode,
  Login,
  sagas,
  reducer,
  userInfo,
  ForgotPassword,
};
