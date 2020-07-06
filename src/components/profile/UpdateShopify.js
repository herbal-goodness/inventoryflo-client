import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { handleSubmitShopify } from "./functions";
import TextFieldGroup from "../commons/TextFieldGroup";
import { AlertDismissible } from "../utils/components";
import { useSelector } from "react-redux";
// import Success from "../signup/Success";

const ShopifyDetails = () => {
  const [shopifyDetails, setShopifyDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(null);
  const { shopifyUrl, password, apiKey } = shopifyDetails;
  const { IdToken, AccessToken } = useSelector(({ userInfo }) => ({
    IdToken: userInfo.user?.IdToken,
    AccessToken: userInfo.user?.AccessToken,
  }));

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setShopifyDetails({ ...shopifyDetails, [name]: value });
  };

  return (
    <form className="pt-5">
      {!loading && error !== null && (
        <AlertDismissible
          header={"Error"}
          message={error.error}
          variant={"danger"}
        />
      )}
      {!loading && error === null && success && (
        <AlertDismissible
          header={"Done"}
          message={"Successful"}
          variant="success"
        />
      )}
      <h3>Shopify Details</h3>
      <TextFieldGroup
        name="shopifyUrl"
        value={shopifyUrl}
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
      <Button
        onClick={() =>
          handleSubmitShopify(shopifyDetails, setLoading, setError, setSucess, {
            IdToken,
            AccessToken,
          })
        }
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default ShopifyDetails;
