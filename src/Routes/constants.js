import { lazy } from "react";
import register from "../components/signup";
import signin from "../components/signin";
import ConfirmSignUp from "../components/signup/ConfirmSignUp";
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));

export const authRoutes = [
  {
    path: "/signup-user",
    component: register.SignUp,
  },
  {
    path: "/forgot-password",
    component: signin.ForgotPassword,
  },
  {
    path: "/send-reset-code",
    component: signin.RequestForgotPasswordCode,
  },
  {
    path: "/sign-up-succsess",
    component: register.Success,
  },
  {
    path: "/confirm-signup",
    component: ConfirmSignUp,
  },
  {
    path: "/signin-user",
    component: signin.Login,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
];
