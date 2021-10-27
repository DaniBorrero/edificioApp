import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Accordion, Container, Modal, Tabs, Table, Tab, Button, Card, Form, Col } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export const RegistroEcomunes = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getedificio();
		actions.getdepartamento();
		actions.getespaciocomun();
		actions.getdiariomural();
	}, []);

	//console.log(store.espacio_comun);
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

	//Hooks DiarioMural
	const [Titulo, setTitulo] = useState("");
	const [TipoPublicacion, setPublicacion] = useState("");
	const [Anuncio, setAnuncio] = useState("");

	//Hooks Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handlerOnclick = e => {
		e.preventDefault();
		actions.registraredificio(NameBuilding, Address, Region, Comuna);
	};
	const handlerOnclickDpto = e => {
		e.preventDefault();
		actions.registrarapartamento(NumApartment, FloorApartment);
	};
	const handlerOnclickEspComun = e => {
		e.preventDefault();
		actions.registrarespaciocomun(CommonSpace, Aforo);
	};
	const handlerOnclickDiarioMural = e => {
		e.preventDefault();
		actions.registrardiariomural(Titulo, TipoPublicacion, Anuncio);
	};

	return (
		<div>
			<Card className="my-5 container">
				<Card.Header>Registro de Espacios Comunes</Card.Header>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="home" title="Registrar">
						<Card.Body>
							<Form onSubmit={handlerOnclickEspComun}>
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
								<Button ClassName="btn btn-primary" size="sm" type="submit" onClick={handleShow}>
									Registrar Espacio Comun
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
					</Tab>
					<Tab eventKey="profile" title="Listar Espacios Comunes">
						<Card.Body>
							<Table striped bordered hover size="sm">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Aforo</th>
									</tr>
								</thead>
								<tbody>
									{store.espacio_comun.map((elemento, posicion) => {
										return (
											<tr key={posicion}>
												<td className="col-md-1">
													<Button
														className="btn btn-info"
														size="sm"
														type="button"
														onClick={() => {
															actions.borrarEspacioComun(elemento);
														}}>
														<i className="fas fa-trash-alt"> </i>
													</Button>{" "}
													<Link to={"/actualizar_espaciocomun/" + elemento.id_commonspace}>
														<Button className="btn btn-info" size="sm" type="button">
															<i className="fas fa-edit" />
														</Button>
													</Link>
													{""}
												</td>
												<td>{elemento.id_commonspace}</td>
												<td> {elemento.name}</td>
												<td>{elemento.aforo}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</Card.Body>
					</Tab>
				</Tabs>
			</Card>
		</div>
	);
};
