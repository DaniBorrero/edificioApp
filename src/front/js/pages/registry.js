import React from "react";
import "../../styles/registry.scss";
import { AccordionForm } from "../component/accordion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import edificioIMG from "../../img/edificio-formulario.jpg";

export const RegistryForm = () => {
	return (
		<Container>
			<Row>
				<Col className="left">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Ingresar
						</Button>
					</Form>
					<AccordionForm />
				</Col>
				<Col className="right">
					<img src={edificioIMG} />
				</Col>
			</Row>
		</Container>
	);
};
