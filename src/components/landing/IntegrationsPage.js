import React from "react";
import { Link } from "react-router-dom";
import shopify from "../../images/shopify-logo-2.png";
import amazon from "../../images/amazon-1.png";

const IntegrationsPage = () => {
  return (
    <div className="int-wrapper text-center py-5">
      <header className="int-header">
        <h2>Integrate seamlessly with the best online platforms</h2>
      </header>
      <div className="">
        <img src={shopify} alt="shopify" className="p-3" />
        <img src={amazon} alt="amazon" className="pt-3 pl-4" />
      </div>
      <div>
        <Link className="int-links" to="/integrations">
          Learn more about integrations
        </Link>
      </div>
    </div>
  );
};

export default IntegrationsPage;
