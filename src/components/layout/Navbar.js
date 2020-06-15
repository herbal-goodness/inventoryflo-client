import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import logo from "../../images/logo.png";

const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return { color: "#ff8800" };
	} else {
		return { color: "#ffffff" };
	}
};
class Navbar extends Component {
	render() {
		const { history } = this.props;
		return (
			<>
				<nav
					className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4"
					id="mainNav">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="logo" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link
									className="nav-link"
									style={isActive(history, "/")}
									to="/">
									Dashboard
								</Link>
							</li>

							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									style={isActive(history, "/products")}
									to=""
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Products
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="">
										All Products
									</Link>
									<Link className="dropdown-item" to="/inventories">
										Inventory
									</Link>
								</div>
							</li>

							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to=""
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									listings
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="">
										<i className="fa fa-amazon mr-2" aria-hidden="true"></i>
										Amazon-Canada-FBA
									</Link>
									<Link className="dropdown-item" to="">
										<i className="fa fa-amazon mr-2" aria-hidden="true"></i>
										Amazon-HerbalGoodness
									</Link>
									<Link className="dropdown-item" to="">
										<i
											className="fa fa-shopping-bag mr-2"
											aria-hidden="true"></i>
										Shopify-Herbal-Goodness
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="">
										<i className="fa fa-cog mr-2" aria-hidden="true"></i>
										Add/Manage Channels
									</Link>
								</div>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									to=""
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									orders
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="">
										orders
									</Link>
									<Link className="dropdown-item" to="">
										shipments
									</Link>
								</div>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="">
									reports
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav justify-content-end">
							<li className="nav-item">
								<Link to="" className="nav-link">
									<i className="fa fa-cog mr-2" aria-hidden="true"></i>
									settings
								</Link>
							</li>
							<li className="nav-item">
								<li className="nav-item dropdown">
									<Link
										className="nav-link dropdown-toggle btn btn-outline-secondary"
										to=""
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										user management
									</Link>
									<div
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<Link className="dropdown-item" to="">
											account info
										</Link>

										<Link className="dropdown-item" to="/signup-user">
											<i
												className="fa fa-user-o fa-fw mr-1"
												aria-hidden="true"></i>{" "}
											sign up
										</Link>
										<Link className="dropdown-item" to="/signin-user">
											<i
												className="fa fa-user fa-fw mr-1"
												aria-hidden="true"></i>{" "}
											login
										</Link>
										<Link className="dropdown-item" to="">
											<i
												className="fa fa-sign-out fa-fw mr-1"
												aria-hidden="true"></i>{" "}
											log out
										</Link>
									</div>
								</li>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

export default withRouter(Navbar);
