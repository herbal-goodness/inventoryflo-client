import React, { useState } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { Button } from "react-bootstrap";

const ShopifyDetails = () => {
  const [shopifyDetails, setShopifyDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { shopifyUrl, password, apiKey } = shopifyDetails;

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    console.log(value);
    setShopifyDetails({ ...shopifyDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    // DISPATCH ACTION TO SUBMIT
  };

  return (
    <form className="pt-5">
      <h3>Shopify Details</h3>
      <TextFieldGroup
        name="shopifyUrl"
        value={shopifyDetails["shopifyUrl"]}
        onChange={handleChange}
        error=""
        type="text"
        placeholder="example.myshopify.com"
      />
      <TextFieldGroup
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <TextFieldGroup
        value={apiKey}
        onChange={handleChange}
        name="apiKey"
        type="password"
        placeholder="Api key"
      />
      <Button onClick={handleSubmit}>{loading ? "Saving..." : "Save"}</Button>
    </form>
  );
};

export default ShopifyDetails;
