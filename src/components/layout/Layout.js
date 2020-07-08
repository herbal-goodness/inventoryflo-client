import React from "react";
import Footer from "../commons/Footer";
import VisitorNavbar from "./Menu";
import LoggedInNavBar from "./SubMenu";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { successful } = useSelector(({ userInfo }) => ({
    successful: userInfo.successful,
  }));
  return (
    <>
      {successful ? (
        <LoggedInNavBar
          navColor={pathname !== "/dashboard" ? "#20846b" : "#20846b"}
        />
      ) : (
        <VisitorNavbar />
      )}
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
