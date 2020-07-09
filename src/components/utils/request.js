import urls from "./urls";
import { select } from "redux-saga/effects";

export const getAccessToken = (state) => state.userInfo.user.AccessToken;
export const getrefreshToken = (state) => state.userInfo.user.refreshToken;
export const getIdToken = (state) => state.userInfo.user.IdToken;

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
  const body = payload ? JSON.stringify(payload) : null;

  let fullUrl = urls.API_ROOT + url;
  let requestData = {
    method: method,
    body,
  };

  if (body !== null) {
    requestData = {
      ...requestData,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  if (headers === 1 && body !== null) {
    const token = yield useAccessToken
      ? select(getAccessToken)
      : select(getIdToken);
    requestData = {
      ...requestData,
      body,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
  }
  if (headers === 1 && body === null) {
    const token = yield useAccessToken
      ? select(getAccessToken)
      : select(getIdToken);
    requestData = {
      ...requestData,
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  }
  return yield fetch(fullUrl, { ...requestData });
}
