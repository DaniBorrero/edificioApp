import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Accordion, Container, Modal, Alert, Button, Card, Form, Col } from "react-bootstrap";

export const AdminAcordeon = () => {
	// Hooks Building//
	const [NameBuilding, setNameBuilding] = useState("");
	const [Address, setAddress] = useState("");
	const [Region, setRegion] = useState("");
	const [Comuna, setComuna] = useState("");
	//   Hooks Apartment
	const [NumApartment, setNumApartment] = useState("");
	const [FloorApartment, setFloorApartment] = useState("");
	// Hooks CommonSpace
	const [CommonSpace, setCommonSpace] = useState("");
	const [Aforo, setAforo] = useState("");

	//Hooks Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { store, actions } = useContext(Context);

	const handlerOnclick = e => {
		e.preventDefault();
		actions.registraredificio(NameBuilding, Address, Region, Comuna);
		actions.registrarapartamento(NumApartment, FloorApartment);
		actions.registrarespaciocomun(CommonSpace, Aforo);
	};

	return (
		<Accordion defaultActiveKey="0">
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Registro De Edificio
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Form onSubmit={handlerOnclick}>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Nombre del Edificio:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el Nombre del Edificio"
									onChange={e => setNameBuilding(e.target.value)}
									value={NameBuilding}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Direccion del Edificio:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque la Dirección"
									onChange={e => setAddress(e.target.value)}
									value={Address}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Region:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque la Región"
									onChange={e => setRegion(e.target.value)}
									value={Region}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Comuna:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque la Comuna"
									onChange={e => setComuna(e.target.value)}
									value={Comuna}
								/>
							</Form.Group>
							<Button ClassName="btn btn-primary" type="submit">
								Registrar Edificio
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="1">
						Registro de Departamento
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="1">
					<Card.Body>
						<Form onSubmit={handlerOnclick}>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Numero de Departamento</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el Numero de Dpto"
									onChange={e => setNumApartment(e.target.value)}
									value={NumApartment}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Piso:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el piso"
									onChange={e => setFloorApartment(e.target.value)}
									value={FloorApartment}
								/>
							</Form.Group>
							<Button ClassName="btn btn-primary" type="submit">
								Registrar Depto
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="2">
						Registro de Espacios Comunes
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="2">
					<Card.Body>
						<Form onSubmit={handlerOnclick}>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Espacio Comun </Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el Nombre del Espacio Comun"
									onChange={e => setCommonSpace(e.target.value)}
									value={CommonSpace}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Aforo:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Coloque el aforo"
									onChange={e => setAforo(e.target.value)}
									value={Aforo}
								/>
							</Form.Group>
							<Button ClassName="btn btn-primary" type="submit" onClick={handleShow}>
								Registrar Espacio Comun
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Enhorabuena</Modal.Title>
									</Modal.Header>
									<Modal.Body>Espacio Comun Registrado!</Modal.Body>
									<Modal.Footer>
										<Button variant="info" onClick={handleClose}>
											Cerrar
										</Button>
									</Modal.Footer>
								</Modal>
							</Button>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};
