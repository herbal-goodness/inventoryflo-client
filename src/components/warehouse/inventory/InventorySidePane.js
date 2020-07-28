import React, { useState } from "react";
import { useDispatch } from "react-redux";

const InventorySidePane = ({ handleSearch }) => {
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
      {/* <h5>inventory SKUs found</h5> */}
      <div className="input-group md-form form-sm form-1 pl-0 my-3 has-search form-group">
        {/* <div className="input-group-prepend">
					<span className="input-group-text purple lighten-3" id="basic-text1">
						<i className="fas fa-search text-white" aria-hidden="true"></i>
					</span>
				</div> */}

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
					{/* <label htmlFor="tags">Tags</label> */}
					<span className="fa fa-search form-control-feedback"></span>
					<input
						type="text"
						className="form-control"
						placeholder="Search Tags"
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
				<h6 className="inv-date-header">Inventory</h6>
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
						Conditions
					</label>
					<select className="form-control">
						<option>All Conditions</option>
						<option>New</option>
						<option>Used</option>
						<option>Reconditioned</option>
						<option>Damaged</option>
					</select>
				</div>
				<div className="form-row inv-btn">
					<div className="form-group col-md-6">
						<button type="button" className="btn btn-block">
							Available
						</button>
					</div>
					<div className="form-group col-md-6">
						<button type="button" className="btn btn-block">
							Out of stock
						</button>
					</div>
				</div>
=======
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
          {/* <label htmlFor="tags">Tags</label> */}
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Tags"
          />
        </div>
        <div className="form-group">
          <label htmlFor="select" className="inv-input-header">
            Channels
          </label>
          <select className="form-control">
            <option>Shopify US</option>
            <option>FBA-Amazon Canada</option>
          </select>
        </div>
        <h6 className="h4">Inventory</h6>
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
            Conditions
          </label>
          <select className="form-control">
            <option>All Conditions</option>
            <option>New</option>
            <option>Used</option>
            <option>Reconditioned</option>
            <option>Damaged</option>
          </select>
        </div>
        <div className="form-row inv-btn">
          <div className="form-group col-md-6">
            <button type="button" className="btn btn-block">
              Available
            </button>
          </div>
          <div className="form-group col-md-6">
            <button type="button" className="btn btn-block">
              Out of stock
            </button>
          </div>
        </div>


        {/* <div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios1"
						value="option1"
						checked
					/>
					<label className="form-check-label" for="exampleRadios1">
						Available
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios2"
						value="option2"
					/>
					<label className="form-check-label" for="exampleRadios2">
						Reserved
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios3"
						value="option3"
					/>
					<label className="form-check-label" for="exampleRadios3">
						On Hand
					</label>
				</div> */}

        <div className="form-row">
          <div className="form-group col-md-6">
            <button
              type="button"
              className="btn btn-info btn-block apply-filter"
            >
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

export default InventorySidePane;
