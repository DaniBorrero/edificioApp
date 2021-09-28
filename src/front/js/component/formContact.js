import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const FormContact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [text, setText] = useState("");

	const handlerOnclick = e => {
		e.preventDefault();
		const form = {
			name,
			email,
			text
		};
		console.log(form);
		// aqui debeir el actions enviar email y con la variable form actions.enviaremail(form)
	};

	const { store, actions } = useContext(Context);

	return (
		<>
			<h2>Contacto</h2>
			<Form onSubmit={handlerOnclick}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Nombre: </Form.Label>
					<Form.Control
						type="text"
						placeholder="Normal text"
						onChange={e => setName(e.target.value)}
						value={name}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="name@example.com"
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Example textarea</Form.Label>
					<Form.Control as="textarea" rows={3} onChange={e => setText(e.target.value)} value={text} />
				</Form.Group>
				<Button
					ClassName="btn btn-primary"
					type="submit"
					onClick={e => {
						actions.enviaremail();

						alert("paso, envio el correo");
					}}>
					Enviar
				</Button>
			</Form>
		</>
	);
};
