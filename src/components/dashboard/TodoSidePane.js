import React from "react";

const TodoSidePane = () => {
	return (
		<>
			<div className="card">
				<div className="card-header">To Do</div>
				<div className="card-body">
					<div className="title">
						<h2>Listing</h2>
					</div>
					<h5 className="card-title">
						<i className="fa fa-tag mr-2 font-icons" aria-hidden="true"></i>{" "}
						Create your first listing
					</h5>

					<div className="overlay-right overlay-right-1">
						<button className="btn btn-secondary" title="start">
							<i
								className="fa fa-external-link font-icons"
								aria-hidden="true"></i>
						</button>
					</div>
					<div className="title">
						<h2>Inventory</h2>
					</div>
					<h5 className="card-title">
						<i className="fa fa-refresh mr-2 font-icons" aria-hidden="true"></i>{" "}
						Enable inventory sync
					</h5>

					<div className="overlay-right overlay-right-2">
						<button className="btn btn-secondary" title="start">
							<i
								className="fa fa-external-link font-icons"
								aria-hidden="true"></i>
						</button>
					</div>
					<div className="title">
						<h2>Order</h2>
					</div>
					<h5 className="card-title">
						<i className="fa fa-truck mr-2 font-icons" aria-hidden="true"></i>{" "}
						Fulfill an order
					</h5>

					<div className="overlay-right overlay-right-3">
						<button className="btn btn-secondary" title="start">
							<i
								className="fa fa-external-link font-icons"
								aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoSidePane;
