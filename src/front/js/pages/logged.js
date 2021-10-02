import React from "react";
import { Acordeonlogged } from "../component/acordeonlogged";
import { Container, Row } from "react-bootstrap";
import "../../styles/registry.scss";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const LoggedScreen = () => {
	return (
		<>
			<Acordeonlogged />
		</>
	);
};
