import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextFieldGroupRow = ({
	name,
	type,
	placeholder,
	value,
	label,
	error,
	info,
	onChange,
	disabled,
}) => {
	return (
		<div className="form-row">
			<div className="form-group col-md-6">
				<input
					type={type}
					className={classnames("form-control form-control-lg", {
						"is-invalid": error,
					})}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					disabled={disabled}
				/>
				{info && <small className="form-text text-muted">{info}</small>}
				{error && <div className="invalid-feedback">{error}</div>}
			</div>
			{/* <div className="form-group col-md-6">
				<input
					type={type}
					className={classnames("form-control form-control-lg", {
						"is-invalid": error,
					})}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					disabled={disabled}
				/>
				{info && <small className="form-text text-muted">{info}</small>}
				{error && <div className="invalid-feedback">{error}</div>}
			</div> */}
		</div>
	);
};

TextFieldGroupRow.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	info: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.string,
};

TextFieldGroupRow.defaultProps = {
	type: "text",
	value: "",
};

export default TextFieldGroupRow;
