import React, { Component } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";

export class ForgotPassword extends Component {
	state = {
		email: "",
		password: "",
		confirmationCode: "",
		errors: {},
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { errors } = this.state;

		return (
			<div className="login mb-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4 m-auto">
							<header className="brand">
								<h1>
									<img
										className="main-logo"
										src={logo}
										alt="inventoryflo logo"
									/>
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
												value={this.state.email}
												onChange={this.handleChange}
												error={errors.email}
											/>

											<TextFieldGroup
												placeholder="New Password"
												name="password"
												type="password"
												value={this.state.password}
												onChange={this.handleChange}
												error={errors.password}
											/>
											<TextFieldGroup
												placeholder="Enter confirmation code"
												name="confirmationCode"
												type="text"
												value={this.state.confirmationCode}
												onChange={this.handleChange}
												error={errors.confirmationCode}
											/>
											<input
												type="submit"
												className="btn btn-info btn-block mt-4"
											/>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ForgotPassword;
