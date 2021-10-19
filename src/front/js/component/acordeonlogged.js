import React, { useState, useEffect, useContext } from "react";
import { Accordion, Modal, Button, Card, Form, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { DateP } from "./datepicker";

export const Acordeonlogged = () => {
	const { store, actions } = useContext(Context);

	//Hooks Marketplace
	const [Titulo, setTitulo] = useState("");
	const [TipoPublicacion, setPublicacion] = useState("");
	const [Anuncio, setAnuncio] = useState("");

	//Hooks Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handlerOnclickMarketplace = e => {
		e.preventDefault();
		actions.registrarmarketplace(Titulo, TipoPublicacion, Anuncio);
	};

	return (
		<Accordion className="datepicker my-0">
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
						MarketPlace
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Form onSubmit={handlerOnclickMarketplace}>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Titulo </Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el titulo del anuncio"
									onChange={e => setTitulo(e.target.value)}
									value={Titulo}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Tipo de Publicacion:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el tipo publicacion"
									onChange={e => setPublicacion(e.target.value)}
									value={TipoPublicacion}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Anuncio:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el anuncio a mostrar en el diario mural"
									onChange={e => setAnuncio(e.target.value)}
									value={Anuncio}
								/>
							</Form.Group>
							<Button ClassName="btn btn-primary" size="sm" type="submit" onClick={handleShow}>
								Registro de MarketPlace
							</Button>
							<Modal show={show} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>Enhorabuena!</Modal.Title>
								</Modal.Header>
								<Modal.Body>Registro Exitoso...</Modal.Body>
								<Modal.Footer>
									<Button variant="info" size="sm" onClick={handleClose}>
										Cerrar
									</Button>
								</Modal.Footer>
							</Modal>
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
