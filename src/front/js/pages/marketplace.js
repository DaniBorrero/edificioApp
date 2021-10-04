import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { Cards } from "../component/card";
import { FormContact } from "../component/formContact";
import { CardGroup, Card } from "react-bootstrap";
import { Certificate } from "../component/certificate";
export const Tested = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>test</h1>
		</>
	);
};
