import React, { useState } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { Button } from "react-bootstrap";
import { USER_FIELDS } from "./constants";
import { handleSubmit } from "./functions";
import { AlertDismissible } from "../utils/components";

const PersonalDetails = ({ details, handleChange, tokens }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div className=" pt-5">
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
      <p style={{ fontSize: "2em" }}>Account Information</p>

      {USER_FIELDS.map(({ name, placeholder, type }, i) => {
        return !(name !== "firstName") ^ (name !== "lastName") ? (
          <TextFieldGroup
            key={i}
            value={details && details[name]}
            onChange={handleChange}
            name={name}
            type={type}
            disabled={"disabled"}
            autocomplete="off"
            placeholder={details && details[name]}
          />
        ) : (
          <TextFieldGroup
            key={i}
            value={details && details[name]}
            onChange={handleChange}
            name={name}
            type={type}
            autocomplete="off"
            placeholder={placeholder}
          />
        );
      })}

      <Button
        onClick={() =>
          handleSubmit(
            "email",
            details,
            setLoading,
            setError,
            setSuccess,
            tokens
          )
        }
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </div>
  );
};

export default PersonalDetails;
