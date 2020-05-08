import React from "react";
import { render } from "@testing-library/react";
import Inventoryflo from "./Inventoryflo";

test("renders learn react link", () => {
	const { getByText } = render(<Inventoryflo />);
	const linkElement = getByText(/Dashboard/i);
	expect(linkElement).toBeInTheDocument();
});
