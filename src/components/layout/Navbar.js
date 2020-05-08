import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

class Navbar extends Component {
	render() {
		return (
			<div>
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
							<li className="nav-item active">
								<Link className="nav-link" to="/">
									Dashboard
								</Link>
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
									Products
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="">
										All Products
									</Link>
									<Link className="dropdown-item" to="">
										Inventory
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="">
										Something else here
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
										All Products
									</Link>
									<Link className="dropdown-item" to="">
										Inventory
									</Link>
									<Link className="dropdown-item" to="">
										Inventory
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="">
										Something else here
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
										All Products
									</Link>
									<Link className="dropdown-item" to="">
										Inventory
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
									<i
										className="fa fa-sign-out fa-fw mr-1"
										aria-hidden="true"></i>
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
