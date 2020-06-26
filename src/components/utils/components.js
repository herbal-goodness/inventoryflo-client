import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import spinner from "../../images/spinner.gif";

export function Spinner() {
  return (
    <div className="spinner container mx-auto">
      <img src={spinner} alt="Loading" />
    </div>
  );
}

/**
 * Component for alerting messages
 * @param {String} header
 * @param {String} message
 * @param {String} variant 	which can be 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
 *
 */
export function AlertDismissible({ header, message, variant }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{header}!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return "";
}
