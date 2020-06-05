import React, { useState, useEffect } from "react";

const SelectField = ({ categories }) => {
	let catArray = new Set();
	categories.map((category) => {
		catArray.add(category.toJS().product_type);
		console.log(catArray);
	});

	return catArray.map((cat, index) => (
		<>
			<div class="form-group">
				<label htmlFor="select">Categories</label>
				<select class="form-control">
					<option key={index}>{cat}</option>
				</select>
			</div>
		</>
	));
};

export default SelectField;
