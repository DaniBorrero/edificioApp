import React from "react";
import "../../styles/registry.scss";
import { AccordionForm } from "../component/accordion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import edificioIMG from "../../img/edificio-formulario.jpg";

export const RegistryForm = () => {
	return (
		<Container className="registryConteiner">
			<Row>
				<Col className="registryLeft">
					<AccordionForm />
				</Col>
				<Col className="registryRight">
					<img className="registryImg" src={edificioIMG} />
				</Col>
			</Row>
		</Container>
	);
};
