import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { handleSubmit } from "./functions";
import TextFieldGroup from "../commons/TextFieldGroup";
import { AlertDismissible } from "../utils/components";

const ShopifyDetails = ({ details, handleChange, tokens }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(null);
  const { shopifyUrl, apiPassword, apiKey } = details;

  return (
    <form className="pt-5">
      <div style={{ maxWidth: "300px" }}>
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
      </div>
      <p style={{ fontSize: "2em" }}>Shopify Details</p>
      <TextFieldGroup
        name="shopifyUrl"
        value={shopifyUrl}
        onChange={handleChange}
        error=""
        type="text"
        placeholder="example.myshopify.com"
      />
      <TextFieldGroup
        name="apiPassword"
        value={apiPassword}
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
          handleSubmit(
            "shopify",
            details,
            setLoading,
            setError,
            setSucess,
            tokens
          )
        }
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default ShopifyDetails;
