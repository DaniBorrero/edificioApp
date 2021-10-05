import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const CardMarketplace = () => {
	return (
		<Row>
			<Col xs={12} md={8}>
				<Card className="mx-3 my-3" bg={"info"} style={{ width: "18rem" }} text={"light"}>
					<Card.Body>
						<Card.Title>Titulo Anuncio</Card.Title>
						<Card.Text>Compra/Venta</Card.Text>
						<Card.Text>Aqui iria el contenido del posteo.</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
