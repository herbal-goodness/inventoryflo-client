import React, { Component } from "react";
import TextFieldGroup from "../commons/TextFieldGroup";
import logo from "../../images/logo.png";

class Login extends Component {
  state = {
    email: "",
    password: "",
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
              <header class="brand">
                <h1>
                  <img class="main-logo" src={logo} alt="inventoryflo logo" />
                </h1>
              </header>
              <div class="card">
                <div class="card-header text-center">Log In</div>
                <div class="card-body">
                  <p class="card-text">
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
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        error={errors.password}
                      />
                      <input
                        type="submit"
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

export default Login;
