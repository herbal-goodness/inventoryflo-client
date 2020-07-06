import React, { useState } from "react";
import Menu from "../layout/Menu";
import Header from "./Header";
import ProcessFlow from "./ProcessFlow";

const Landing = () => {
	const [newComponent, setComp] = useState({ visible: true });
	const { visible } = newComponent;
	return (
		<>
			{visible ? <Menu /> : null}
			<Header />
			<ProcessFlow />
		</>
	);
};

export default Landing;
