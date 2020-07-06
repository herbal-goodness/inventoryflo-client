import React from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { Button } from "react-bootstrap";

const PersonalDetails = () => {
  return (
    <div className=" pt-5">
      <h3>Personal Details</h3>

      <TextFieldGroup
        type="email"
        placeholder="okemmadueric@gmail.com"
        disabled
      />
      <TextFieldGroup type="text" placeholder="First Name" />
      <TextFieldGroup type="text" placeholder="Last Name" />
      <TextFieldGroup type="text" placeholder="Company Name" />
      <TextFieldGroup type="tel" placeholder="Phone" />
      <Button> Save </Button>
    </div>
  );
};

export default PersonalDetails;
