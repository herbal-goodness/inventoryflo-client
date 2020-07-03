import React, { useState, useEffect } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/inventoryflo-logo-2.png";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "./actions";
import { useHistory, Link } from "react-router-dom";
import { Spinner, AlertDismissible } from "../utils/components";
import { FORM_DETAILS } from "./constants";

const SignUp = () => {
	const [userInfo, setUserInfo] = useState({});
	const [{ isError, message }, setMessage] = useState({
		isError: false,
		message: "",
	});

	const [errors, setInputError] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();

	const { user, successful, loading, error } = useSelector(({ signup }) => ({
		loading: signup.loading,
		successful: signup.successful,
		user: signup.userInfo,
		error: signup.error,
	}));

	const { isLoading } = useSelector(({ login }) => ({
		isLoading: login.loading,
	}));
	const { loginSuccessful } = useSelector(({ userInfo }) => ({
		loginSuccessful: userInfo.successful,
	}));

	const handleChange = (e) => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		for (const val in userInfo) {
			// TODO: Write a check for error before user submits
			//   Then set error messages appropriately
			//   TODO: refine this message and error reporting to good info about the error
			if (userInfo[val].length < 3 || userInfo.val === "") {
				return setInputError({ [val]: `this is not a valid ${val}` });
			}
		}
		dispatch(signupRequest(userInfo));
		e.preventDefault();
	};

	useEffect(() => {
		setMessage({ isError: false, message: "" });
		if (successful)
			return history.push(`/confirm-signup`, {
				userId: user.userId,
				email: user.email,
			});
		if (error) setMessage({ isError: true, message: error.error });
	}, [loading]);

	//TODO: Replace with a betther UI to redirect user to home
	return loginSuccessful && !isLoading ? (
		<h1 style={{ margin: "25% 20%" }}>
			You are already logged in, <a href="/dashboard"> go home</a>
		</h1>
	) : (
		<div className="register mb-5">
			<div className="container">
				<div className="row">
					{loading ? (
						Spinner()
					) : (
						<div className="col-md-5 m-auto">
							{isError && (
								<AlertDismissible
									header={"Error!"}
									message={message}
									variant={"danger"}
								/>
							)}
							<header className="brand">
								<Link to="/">
									<img
										className="main-logo"
										src={logo}
										alt="inventoryflo logo"
									/>
								</Link>
							</header>
							<div className="card">
								<div className="card-header text-center text-green">
									Sign Up
								</div>
								<div className="card-body">
									<div className={"d-flex justify-content-between"}>
										<TextFieldGroup
											className={"w-45"}
											placeholder="First Name"
											name="firstName"
											type="text"
											onChange={handleChange}
											value={userInfo["firstName"]}
											error={errors["firstName"]}
										/>
										<TextFieldGroup
											placeholder={"Last Name"}
											name="lastName"
											type="text"
											onChange={handleChange}
											value={userInfo["lastName"]}
											error={errors["lastName"]}
										/>
									</div>
									{FORM_DETAILS.map(({ placeholder, name, type }, index) => (
										<TextFieldGroup
											key={index}
											placeholder={placeholder}
											name={name}
											type={type}
											onChange={handleChange}
											value={userInfo[name]}
											error={errors[name]}
										/>
									))}
									<input
										onClick={handleSubmit}
										type="submit"
										value="Create Account"
										className="btn btn-info btn-block mt-4"
									/>
									<div className="mt-3">
										<p className="text-muted d-flex justify-content-between">
											<span className="text-green text-slim">
												Already have an account?
											</span>

											<Link to="/" className="text-gray text-slim d-block">
												Sign In
											</Link>
										</p>
										<p className="more-info text-center">
											By clicking on "Create Account", you are accepting our{" "}
											<br />
											<Link
												to="/privacy-policy"
												className="text-decoration-none text-green text-slim">
												data privacy policy
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SignUp;
