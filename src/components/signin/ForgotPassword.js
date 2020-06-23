import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";

export const ForgotPassword = () => {
	const [details, setDetails] = useState({});

	const handleChange = ({ target }) => {
		setDetails({ ...details, [target.name]: target.value });
	};

	return (
		<div className="login mb-5">
			<div className="container">
				<div className="row">
					<div className="col-md-4 m-auto">
						<header className="brand">
							<h1>
								<img className="main-logo" src={logo} alt="inventoryflo logo" />
							</h1>
						</header>
						<div className="card">
							<div className="card-header text-center">
								Create a new password
							</div>
							<div className="card-body">
								<div className="card-text">
									<form>
										<TextFieldGroup
											placeholder="Email Address"
											name="email"
											type="email"
											value={details.email}
											onChange={handleChange}
										/>

										<TextFieldGroup
											placeholder="New Password"
											name="password"
											type="password"
											value={details.password}
											onChange={handleChange}
										/>
										<TextFieldGroup
											placeholder="Enter confirmation code"
											name="confirmationCode"
											type="text"
											value={details.confirmationCode}
											onChange={handleChange}
										/>
										<input
											type="submit"
											className="btn btn-info btn-block mt-4"
										/>
										<div className="mt-3">
											<p>
												<Link
													to=""
													className="text-decoration-none text-slim text-primary">
													Didn't receive any code?{" "}
												</Link>
												<button
													type="button"
													className="btn btn-outline-primary text-slim ml-3 text-left">
													Resend Code
												</button>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
