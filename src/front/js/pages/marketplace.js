<<<<<<< HEAD
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
=======
import React from "react";
import { Container, Array, Card, Col, Row, CardGroup } from "react-bootstrap";
import marketIMG from "../../img/ventajas-marketplace.jpg";
import { CardMarketplace } from "../component/cardMarketplace";
import "../../styles/marketplace.scss";

export const Marketplace = () => {
	return (
		<div>
			<h1 className="Marketplaceheader">Marketplace</h1>
			<CardGroup className="containermarket row">
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
				<CardMarketplace />
			</CardGroup>
		</div>
>>>>>>> 012906e37f2c31e41f22df29dbed890ea73d51ae
	);
};
