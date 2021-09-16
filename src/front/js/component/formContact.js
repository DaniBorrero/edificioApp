import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export const FormContact = () => {
	return (
		<>
			<h2>Contacto</h2>
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
			</Form>
		</>
	);
};
