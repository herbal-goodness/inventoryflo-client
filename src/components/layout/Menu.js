import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg" id="main-menu">
				<div className="container">
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon">
							<i className="fa fa-bars" />
						</span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-center align-items-center"
						id="collapsibleNavId">
						<ul className="nav mr-auto text-muted">
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Features
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Integrations
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Pricing
								</Link>
							</li>
						</ul>
						<ul>
							<li className="nav-item">
								<Link className="nav-link btn btn-outline-secondary" to="#">
									Get Started
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
