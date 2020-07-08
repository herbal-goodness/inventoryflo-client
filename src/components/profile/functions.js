import API from "../utils/urls";
import { storeUser } from "../signin/actions";

function validateUserInput(userInput) {
  for (let i in userInput) {
    if (userInput[i] === undefined || userInput[i] === null) {
      return false;
    } else if (userInput[i].length < 3) {
      return false;
    }
  }
  return true;
}

/**
 *Functio that handles the submit of all the edit field from the user
 * @param {string} type used to determine which fields are submited
 * @param {object} details the field informations submitted
 * @param {Function} setLoading a function to toggle loading based on netowrk call
 * @param {Function} setError a function to toggle error based on netowrk call
 * @param {Function} setSucess a function to toggle success based on netowrk call
 * @param {object} tokens an object for the user idToken and access tokens
 * @returns {void}
 */
export const handleSubmit = async (
  type,
  details,
  setLoading,
  setError,
  setSucess,
  tokens
) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    shopifyUrl,
    apiPassword,
    previousPassword,
    proposedPassword,
  } = details;
  try {
    setLoading(true);
    /** Update user personal details or shopify or Password */
    let endPoint;
    let payLoad;
    if (type === "email") {
      endPoint = "/update-user";
      payLoad = { firstName, lastName, email, phone, company };
    }
    if (type === "shopify") {
      endPoint = "/add-shopify";
      payLoad = { shopifyUrl, apiPassword };
    }

    if (type === "passowrd") {
      endPoint = "/change-password";
      payLoad = { previousPassword, proposedPassword };
    }

    if (!validateUserInput(payLoad)) {
      setError({ error: "You can't submit empty field" });
      setLoading(false);
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }

    const res = await fetch(API.API_ROOT + endPoint, {
      body: JSON.stringify(payLoad),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.AccessToken}`,
      },
    });

    const data = await res.json();
    console.log(data);
    if (res.status > 300) {
      setError(data);
      setSucess(false);
      setLoading(false);
    } else {
      const { dispatch } = details;
      setSucess(true);
      type === "email"
        ? dispatch(storeUser(data.data))
        : dispatch({ type: "GET_USER" });
      setLoading(false);
      setError(null);
    }
  } catch (error) {
    setLoading(false);
    setError(error);
  }
};
