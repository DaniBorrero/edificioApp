import React from "react";
import { Accordion, Card, Form, Button, Col } from "react-bootstrap";

export const AccordionForm = () => {
	return (
		<Accordion>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
						Crear Cuenta Residente
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Correo Electronico</Form.Label>
									<Form.Control type="email" placeholder="correo@dominio.cl" />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="formGridName">
								<Form.Label>Nombre Completo</Form.Label>
								<Form.Control placeholder="p. ej. Juan Pablo Gomez Lopez" />
							</Form.Group>

							<Form.Row>
								<Form.Group controlId="formGridApartment">
									<Form.Label>Departamento</Form.Label>
									<Form.Control placeholder="101" />
								</Form.Group>
								<Form.Group controlId="formGridTower">
									<Form.Label>Torre</Form.Label>
									<Form.Control placeholder="A o B" />
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="Telephone">
									<Form.Label>Telefono</Form.Label>
									<Form.Control placeholder="+569..." />
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="Storage">
									<Form.Label>Bodega</Form.Label>
									<Form.Control placeholder="A101, B102" />
								</Form.Group>
								<Form.Group as={Col} controlId="Parking">
									<Form.Label>Estacionamiento</Form.Label>
									<Form.Control placeholder="A101, B102" />
								</Form.Group>
							</Form.Row>
							<Button variant="primary" type="submit">
								Registrarse
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
						Crear Cuenta Administrador
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<Form>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Correo Electronico</Form.Label>
									<Form.Control type="email" placeholder="correo@dominio.cl" />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="formGridName">
								<Form.Label>Nombre Completo</Form.Label>
								<Form.Control placeholder="p. ej. Juan Pablo Gomez Lopez" />
							</Form.Group>

							<Form.Row>
								<Form.Group as={Col} controlId="Telephone">
									<Form.Label>Telefono</Form.Label>
									<Form.Control placeholder="+569..." />
								</Form.Group>
							</Form.Row>
							<Button variant="primary" type="submit">
								Registrarse
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};
