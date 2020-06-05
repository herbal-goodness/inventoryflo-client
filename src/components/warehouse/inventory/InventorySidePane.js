import React, { Component } from "react";
import { Link } from "react-router-dom";

import SelectField from "../../commons/SelectField";

export class InventorySidePane extends Component {
	render() {
		const { products } = this.props;
		const showCategories = () => {
			if (this.props.products) {
				return products.map((eachData, index) => (
					// <SelectField key={index} categories={eachData} />

					<select className="form-control" key={index}>
						<option>{eachData.toJS().product_type}</option>
					</select>
				));
			} else {
				return null;
			}
		};
		return (
			<div>
				<h5>inventory SKUs found</h5>
				<div class="input-group md-form form-sm form-1 pl-0 mb-2">
					<div class="input-group-prepend">
						<span class="input-group-text purple lighten-3" id="basic-text1">
							<i class="fas fa-search text-white" aria-hidden="true"></i>
						</span>
					</div>
					<input
						class="form-control my-0 py-1"
						type="text"
						placeholder="Search"
						aria-label="Search"
					/>
				</div>
				<form>
					<div class="form-group">
						<label htmlFor="tags">Tags</label>
						<input type="text" class="form-control" placeholder="Search Tags" />
					</div>
					<div class="form-group">
						<label htmlFor="select">Conditions</label>
						<select class="form-control">
							<option>All Conditions</option>
							<option>New</option>
							<option>Used</option>
							<option>Reconditioned</option>
							<option>Damaged</option>
						</select>
					</div>
					<div class="form-group">
						<label htmlFor="select">Categories</label>
						<select class="form-control">
							<option>All Categories</option>
							<option>New</option>
							<option>Used</option>
							<option>Reconditioned</option>
							<option>Damaged</option>
						</select>
					</div>
					{/* {showCategories} */}
					<div class="form-group">
						<label htmlFor="select">Warehouses</label>
						<select class="form-control">
							<option>All Warehouses</option>
							<option>FBA-Amazon Canada</option>
							<option>Used</option>
							<option>Reconditioned</option>
							<option>Damaged</option>
						</select>
					</div>
					<h6>Inventory</h6>
					<div class="form-row">
						<div class="form-group col-md-6">
							<label htmlFor="date">From</label>
							<input type="date" class="form-control" />
						</div>
						<div class="form-group col-md-6">
							<label htmlFor="date">To</label>
							<input type="date" class="form-control" />
						</div>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios1"
							value="option1"
							checked
						/>
						<label class="form-check-label" for="exampleRadios1">
							Available
						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							value="option2"
						/>
						<label class="form-check-label" for="exampleRadios2">
							Reserved
						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios3"
							value="option3"
						/>
						<label class="form-check-label" for="exampleRadios3">
							On Hand
						</label>
					</div>

					<div class="form-row">
						<div class="form-group col-md-6">
							<input
								type="submit"
								value="Apply filter"
								className="btn btn-info mt-4"
							/>
						</div>
						<div class="form-group col-md-6">
							<input
								type="submit"
								value="Apply filter"
								className="btn btn-outline-primary mt-4"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default InventorySidePane;
