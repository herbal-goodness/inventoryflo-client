import React from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { Button } from "react-bootstrap";

const Password = () => {
  return (
    <div className="pt-5">
      <p style={{ fontSize: "2em" }}>Change Password</p>
      <TextFieldGroup type="password" placeholder="Old Password" />
      <TextFieldGroup type="password" placeholder="New Password" />
      <Button> Save </Button>
    </div>
  );
};

export default Password;
