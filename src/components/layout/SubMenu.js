import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../images/footer-logo-1.png";

const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return { color: "#ff8800" };
	} else {
		return { color: "#ffffff" };
	}
};

const SubMenu = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch({ type: "RESET_STATE", payload: history });
	};
	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4"
				id="mainNav">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="logo" className="nav-logo" />
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
							<Link className="nav-link" style={isActive(history, "/")} to="/">
								Dashboard
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, "/inventories")}
								to="/inventories">
								Inventory
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, "/sales")}
								to="/sales">
								Sales
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav justify-content-end">
						<li className="nav-item">
							<ul>
								<li className="nav-item dropdown">
									<Link
										className="nav-link dropdown-toggle btn btn-outline-secondary"
										to=""
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Your account
									</Link>
									<div
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<Link className="dropdown-item" to="">
											account info
										</Link>

										<Link
											className="dropdown-item"
											to="/"
											onClick={handleLogout}>
											<i
												className="fa fa-sign-out fa-fw mr-1"
												aria-hidden="true"></i>
											log out
										</Link>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default withRouter(SubMenu);
