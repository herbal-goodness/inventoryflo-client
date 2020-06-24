import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/inventoryflo-logo-2.png";
import { loginRequest } from "./actions";
import Spinner from "../utils/Spinner";

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({});
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();

	/**selects some pieces of the state */
	const { loading, error } = useSelector(({ login }) => ({
		loading: login.loading,
		error: login.error,
	}));
	const { successful } = useSelector(({ userInfo }) => ({
		successful: userInfo.successful,
	}));

	/** gets the information from the input fields */
	const handleChange = ({ target }) => {
		setLoginInfo({ ...loginInfo, [target.name]: target.value });
	};

	/** dispatch action to submit login details */
	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Replace with a better check for error and report appropriately
		if (!/@/.test(loginInfo.email) || loginInfo.password.length < 3) {
			setErrors({ password: "invalid", email: "invalid" });
		}
		// dispatch the login action with the login details payload
		dispatch(loginRequest({ loginInfo, history }));
	};

	useEffect(() => {
		if (successful) return history.push("/dashboard");
		// TODO: Replace alert with cool toast message
		if (error) return alert(error.error);
	}, [loading, successful]);

	return (
		<div className="login mb-5">
			<div className="container">
				<div className="row">
					<div className="col-md-4 m-auto">
						<header className="brand">
							<Link to="/">
								<img className="main-logo" src={logo} alt="inventoryflo logo" />
							</Link>
						</header>
						<div className="card">
							<div className="card-header text-center text-green">Log In</div>
							{loading ? (
								Spinner()
							) : (
								<div className="card-body">
									<TextFieldGroup
										placeholder="Email Address"
										name="email"
										type="email"
										value={loginInfo.email}
										onChange={handleChange}
										error={errors.email}
									/>

									<TextFieldGroup
										placeholder="Password"
										name="password"
										type="password"
										value={loginInfo.password}
										onChange={handleChange}
										error={errors.password}
									/>
									<input
										onClick={handleSubmit}
										type="submit"
										value="Sign in to your account"
										className="btn btn-info btn-block mt-4"
									/>
									<div className="text-center mt-3">
										<p className="text-muted d-flex justify-content-between">
											<Link
												to="/signup-user"
												className="text-decoration-none text-green text-slim">
												New to inventoryflo?
											</Link>

											<Link
												to="/send-reset-code"
												className="text-info text-slim d-block">
												forgot password?
											</Link>
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
