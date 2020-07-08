import React from "react";
import Header from "./Header";
import ProcessFlow from "./ProcessFlow";
import Stock from "./Stock";
import Sales from "./Sales";
import IntegrationsPage from "./IntegrationsPage";

const Landing = () => {
  return (
    <>
      <Header />
      <ProcessFlow />
      <Stock />
      <Sales />
      <IntegrationsPage />
    </>
  );
};

export default Landing;
