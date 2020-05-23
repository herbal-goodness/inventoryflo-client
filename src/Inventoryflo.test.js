import React from "react";
import { render } from "@testing-library/react";
import Inventoryflo from "./Inventoryflo";

test("renders learn react link", () => {
	const { queryAllByText } = render(<Inventoryflo />);
	const linkElement = queryAllByText(/InventoryContainer/i);
	expect(linkElement).toBeInTheDocument();
});
