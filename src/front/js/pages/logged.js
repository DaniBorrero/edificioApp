import React, { useContext } from "react";
import { Acordeonlogged } from "../component/acordeonlogged";
import { Container, Row } from "react-bootstrap";
import "../../styles/registry.scss";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Context } from "../store/appContext";

export const LoggedScreen = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{localStorage.getItem("token") != null ? (
				<>
					<Acordeonlogged />
					{/* <button ons={localStorage.removeItem("token")}>Test</button> */}
				</>
			) : (
				<h1>No tiene persmiso para entrar a esta pagina</h1>
			)}
		</>
	);
};
