export default {
  urls: {
    SIGN_UP: "/signup-user",
    SIGN_IN: "/signin-user",
    CONFIRM_CODE: "/confirm-signup",
  },
  API_ROOT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/dev/v1"
      : "https://38knpk9vq1.execute-api.us-east-2.amazonaws.com/dev/v1",
};
