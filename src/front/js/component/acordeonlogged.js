import React from "react";
import { Accordion, Card, Form, Button, Col } from "react-bootstrap";

export const Acordeonlogged = () => {
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="2">
				<Accordion.Header>Reserva tu Quincho</Accordion.Header>
				<Accordion.Body>Ejemplo</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header>Marketplace</Accordion.Header>
				<Accordion.Body>
					<Form>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridUser">
								<Form.Label>Usuario</Form.Label>
								<Form.Control type="text" placeholder="Depto.001" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGriTitle">
								<Form.Label>Título</Form.Label>
								<Form.Control type="title" placeholder="Agrega un Título" />
							</Form.Group>
						</Form.Row>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Descripción</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
					</Form>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
