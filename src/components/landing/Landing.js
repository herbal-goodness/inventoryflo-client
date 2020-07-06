import React, { useState } from "react";
import Menu from "../layout/Menu";
import Header from "./Header";
import ProcessFlow from "./ProcessFlow";
import Stock from "./Stock";

const Landing = () => {
	const [newComponent, setComp] = useState({ visible: true });
	const { visible } = newComponent;
	return (
		<>
			{visible ? <Menu /> : null}
			<Header />
			<ProcessFlow />
			<Stock />
		</>
	);
};

export default Landing;
