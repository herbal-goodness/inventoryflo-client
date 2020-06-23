import urls from "./urls";
import { select } from "redux-saga/effects";

export const getAccessToken = (state) => state.login.userInfo.accessToken;
export const getrefreshToken = (state) => state.login.userInfo.refreshToken;
export const getIdToken = (state) => state.login.userInfo.idToken;

/**
 * Function to make api call to the backend
 * @param {*} method The http  method PUT, POST, DELETE, GET
 * @param {*} url The url path to make the request
 * @param {*} payload The data to sent with the body. Default to null
 * @param {Number} headers Set to 0 if you don't want to make a secured request
 * @param {boolean} useAccessToken Set to true if you want the request to be sent with access token
 */
export function* makeApiCall(
  method,
  url,
  payload,
  headers = 1,
  useAccessToken = false
) {
  payload = payload ? JSON.stringify(payload) : null;

  let fullUrl = urls.API_ROOT + url;
  let requestData = {
    method: method,
  };

  if (payload !== null) {
    requestData = {
      ...requestData,
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  if (headers === 1) {
    const token = yield useAccessToken
      ? select(getAccessToken)
      : select(getIdToken);
    requestData.headers["Authorization"] = "Bearer " + token;
  }
  return yield fetch(fullUrl, { ...requestData });
}
