import React from "react";
import Footer from "../commons/Footer";
import Navbar from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
