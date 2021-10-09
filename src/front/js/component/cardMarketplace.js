import React, { useEffect, useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";

export const CardMarketplace = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getespaciocomun();
		},
		[store.espacio_comun]
	);

	return (
		<Row>
			{store.espacio_comun.map((elemento, posicion) => {
					<Col xs={12} md={8}>
						<Card className="mx-3 my-3" bg={"info"} style={{ width: "18rem" }} text={"light"}>
							<Card.Body>
								<Card.Title>{}</Card.Title>
								<Card.Text>Compra/Venta</Card.Text>
								<Card.Text>Aqui iria el contenido del posteo.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
			})}				
		</Row>
	);
};
