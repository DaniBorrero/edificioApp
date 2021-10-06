import React, { useContext } from "react";
import { Acordeonlogged } from "../component/acordeonlogged";
import { Container, Row } from "react-bootstrap";
import "../../styles/registry.scss";
import { Context } from "../store/appContext";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const LoggedScreen = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{sessionStorage.getItem("token") != undefined ? (
				<Acordeonlogged />
			) : (
				<h1>No tiene persmiso para entrar a esta pagina</h1>
			)}
		</>
	);
};
