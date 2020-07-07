import React from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { Button } from "react-bootstrap";
import { USER_FIELDS } from "./constants";

const PersonalDetails = ({ details, handleChange, tokens }) => {
  return (
    <div className=" pt-5">
      <p style={{ fontSize: "2em" }}>Account Information</p>

      {USER_FIELDS.map(({ name, placeholder, type }, i) => {
        return name === "email" ? (
          <TextFieldGroup
            key={i}
            value={details && details[name]}
            onChange={handleChange}
            name={name}
            type={type}
            disabled
            placeholder={placeholder}
          />
        ) : (
          <TextFieldGroup
            key={i}
            value={details && details[name]}
            onChange={handleChange}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        );
      })}

      <Button> Save </Button>
    </div>
  );
};

export default PersonalDetails;
