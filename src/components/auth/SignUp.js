import React, { Component } from "react";

import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";

class SignUp extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		company: "",
		phone: "",
		errors: {},
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="register mb-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4 m-auto">
							<header class="brand">
								<h1>
									<img class="main-logo" src={logo} alt="inventoryflo logo" />
								</h1>
							</header>
							<div class="card">
								<div class="card-header text-center">Sign Up</div>
								<div class="card-body">
									<p class="card-text">
										<form
											noValidate
											onSubmit={this.handleSubmit}
											className="form">
											<TextFieldGroup
												placeholder="First Name"
												name="firstname"
												value={this.state.firstName}
												onChange={this.handleChange}
												error={errors.firstName}
											/>
											<TextFieldGroup
												placeholder="Last Name"
												name="lastname"
												value={this.state.lastName}
												onChange={this.handleChange}
												error={errors.lastName}
											/>
											<TextFieldGroup
												placeholder="Email"
												name="email"
												type="email"
												value={this.state.email}
												onChange={this.handleChange}
												error={errors.email}
											/>
											<TextFieldGroup
												placeholder="Password"
												name="password"
												type="password"
												value={this.state.password}
												onChange={this.handleChange}
												error={errors.password}
											/>
											<TextFieldGroup
												placeholder="Company"
												name="company"
												value={this.state.company}
												onChange={this.handleChange}
												error={errors.company}
											/>
											<TextFieldGroup
												placeholder="Phone"
												name="phone"
												value={this.state.phone}
												onChange={this.handleChange}
												error={errors.phone}
											/>
											<input
												type="submit"
												value="Create Account"
												className="btn btn-info btn-block mt-4"
											/>
										</form>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
