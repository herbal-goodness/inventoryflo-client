import React, { useState } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
// import { Button } from "react-bootstrap";
import { handleSubmit } from "./functions";
import { AlertDismissible } from "../utils/components";

const Password = ({ details, handleChange, tokens }) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	return (
		<div className="pt-5">
			<p style={{ fontSize: "2em" }}>Change Password</p>
			<div style={{ maxWidth: "300px" }}>
				{!loading && error !== null && (
					<AlertDismissible
						header={"Error"}
						message={error.error.message || error.error}
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

			<TextFieldGroup
				name="previousPassword"
				onChange={handleChange}
				value={details && details["previousPassword"]}
				type="password"
				placeholder="Old Password"
			/>

			<TextFieldGroup
				name="proposedPassword"
				onChange={handleChange}
				value={details && details["proposedPassword"]}
				type="text"
				placeholder="New Password"
			/>
			<button
				className="btn btn-info acct-info-btn"
				onClick={() =>
					handleSubmit(
						"passowrd",
						details,
						setLoading,
						setError,
						setSuccess,
						tokens
					)
				}>
				{loading ? "Saving..." : "Save"}
			</button>
		</div>
	);
};

export default Password;
