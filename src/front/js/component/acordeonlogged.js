import React, { useState } from "react";
import { Accordion, Card, Form, Button, Col } from "react-bootstrap";
import { DateP } from "./datepicker";

export const Acordeonlogged = () => {
	return (
		<Accordion className="datepicker">
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
						MarketPlace
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridUser">
									<Form.Label>Usuario</Form.Label>
									<Form.Control type="user" placeholder="nombre de usuario" />
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="formGridTitle">
								<Form.Label>Titulo</Form.Label>
								<Form.Control placeholder="Titulo" />
							</Form.Group>

							<Form.Row>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Example textarea</Form.Label>
									<Form.Control as="textarea" rows={6} />
								</Form.Group>
							</Form.Row>
							<Button variant="primary" type="submit">
								Publicar
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
						Mensaje a Administrador
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<Form>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Nombre: </Form.Label>
								<Form.Control type="text" placeholder="Normal text" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Example textarea</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<Button ClassName="btn btn-primary">Enviar</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
						Reserva de Espacios Comunes
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="2">
					<Card.Body style={{ height: "400px" }}>
						<Form>
							<DateP />

							<button /* onClick={actions.reservaEsopacio(espacio, date)}*/>Reservar</button>

						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};
