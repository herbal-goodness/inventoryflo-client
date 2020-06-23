import Cookies from "js-cookie";
import API from "../components/utils/urls";
import { storeUser } from "../components/signin/actions";

// co(function* () {
//   var result = yield Promise.resolve(true);
//   return result;
// }).then(function (value) {
//   console.log(value);
// }, function (err) {
//   console.error(err.stack);
// });

// export const getAccessToken = () => Cookies.get("access_token");
export const refreshToken = () => Cookies.get("refreshToken");
// export const getTokens = () => localStorage.getItem("login");
// export const isAuthenticated = () => !!getAccessToken();

export async function isAuthenticated(dispatch, history) {
  if (refreshToken()) {
    try {
      const response = await fetch(
        `${API.API_ROOT}/refresh-token?refreshToken=${refreshToken()}
        `
      );

      if (response.ok) {
        const { data } = await response.json();
        const { ExpiresIn } = data;
        const expires = ExpiresIn * 1000;
        const inOneHour = new Date(new Date().getTime() + expires);

        Cookies.set("refreshToken", refreshToken(), { expires: inOneHour });

        dispatch(storeUser(data));
        return true;
      } else {
        const data = await response.json();
        console.log(data);
        dispatch({ type: "RESET_STATE", history });
        return false;
      }
    } catch (error) {
      dispatch({ type: "RESET_STATE", history });

      return false;
    }
  }
  return false;
}
