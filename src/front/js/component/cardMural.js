import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const CardMural = () => {
	return (
		<Row>
			<Col xs={12} md={8}>
				<Card className="mx-3 my-3" bg={"warning"} style={{ width: "18rem" }} text={"light"}>
					<Card.Body>
						<Card.Title>Titulo Anuncio</Card.Title>
						<Card.Text>Aqui iria el contenido del posteo.</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
