import React, { useEffect, useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";

export const CardMarketplace = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getmarketplace();
		},
		[store.marketplace]
	);
	return (
		<Row>
			{store.marketplace.map((elemento, posicion) => {
				return (
					<Col xs={12} md={8} key={posicion}>
						<Card className="mx-3 my-3" bg={"info"} style={{ width: "18rem" }} text={"light"}>
							<Card.Body>
								<Card.Title>{elemento.title_announcement}</Card.Title>
								<Card.Text>{elemento.announcement}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
};
