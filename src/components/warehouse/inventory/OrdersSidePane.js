import React, { useState } from "react";
import { useDispatch } from "react-redux";

const OrdersSidePane = ({ handleSearch, title }) => {
	const dispatch = useDispatch();
	const [to, setTo] = useState("");
	const [from, setFrom] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (to.length > 4 && from.length > 4) {
			dispatch({
				type: "GET_ORDERS",
				payload: { createdAtMin: from, createdAtMax: to },
			});
		}
	};
	return (
		<div>
			<div className="input-group md-form form-sm form-1 pl-0 my-3 has-search form-group">
				<span className="fa fa-search form-control-feedback"></span>
				<input
					onChange={handleSearch}
					className="form-control my-0 py-1"
					type="text"
					placeholder="Search products"
					aria-label="Search"
				/>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group has-search">
					<span className="fa fa-search form-control-feedback"></span>
					<input
						type="text"
						className="form-control"
						placeholder="Search orders"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="select" className="inv-input-header">
						Channels
					</label>
					<select className="form-control">
						<option className="hover-col">Shopify US</option>
						<option>FBA-Amazon Canada</option>
					</select>
				</div>
				<h6 className="inv-date-header">{title}</h6>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="date1" className="inv-input-header">
							From
						</label>
						<input
							type="date"
							id="date2"
							onChange={({ currentTarget }) =>
								setFrom(new Date(currentTarget.valueAsDate).toJSON())
							}
							class="form-control"
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="date2" className="inv-input-header">
							To
						</label>
						<input
							type="date"
							id="date2"
							onChange={({ currentTarget }) =>
								setTo(new Date(currentTarget.valueAsDate).toJSON())
							}
							className="form-control"
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="select" className="inv-input-header">
						Categories
					</label>
					<select className="form-control">
						<option>All Categories</option>
						<option>New</option>
						<option>Used</option>
						<option>Reconditioned</option>
						<option>Damaged</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="select" className="inv-input-header">
						Status
					</label>
					<select className="form-control">
						<option>All status</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="select" className="inv-input-header">
						Ships from
					</label>
					<select className="form-control">
						<option>All locations</option>
					</select>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<button
							type="button"
							className="btn btn-info btn-block apply-filter">
							Apply filter
						</button>
					</div>
					<div className="form-group col-md-6">
						<button type="button" className="btn btn-link btn-block text-dark">
							Clear filter
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default OrdersSidePane;