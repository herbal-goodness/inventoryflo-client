import React from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import { Button } from "react-bootstrap";

const Password = () => {
  return (
    <div className="pt-5">
      <h3>Change Password</h3>
      <TextFieldGroup type="password" placeholder="Old Password" />
      <TextFieldGroup type="password" placeholder="New Password" />
      <Button> Save </Button>
    </div>
  );
};

export default Password;
