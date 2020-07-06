import React, { useState } from "react";
import Menu from "../layout/Menu";
import Header from "./Header";
import ProcessFlow from "./ProcessFlow";
import Stock from "./Stock";
import Sales from "./Sales";

const Landing = () => {
	const [newComponent, setComp] = useState({ visible: true });
	const { visible } = newComponent;
	return (
		<>
			{visible ? <Menu /> : null}
			<Header />
			<ProcessFlow />
			<Stock />
			<Sales />
		</>
	);
};

export default Landing;
