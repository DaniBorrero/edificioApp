import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Accordion, Container, Modal, Tabs, Table, Tab, Button, Card, Form, Col } from "react-bootstrap";

export const AdminAcordeon = () => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getespaciocomun();
			actions.getdiariomural();
		},
		[store.espacio_comun],
		[store.diario_mural]
	);
	console.log(store.espacio_comun);
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
		actions.registrarapartamento(NumApartment, FloorApartment);
		actions.registrarespaciocomun(CommonSpace, Aforo);
		actions.registrardiariomural(Titulo, TipoPublicacion, Anuncio);
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
							<Button ClassName="btn btn-primary" size="sm" type="submit">
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
							<Button ClassName="btn btn-primary" size="sm" type="submit">
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
					<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
						<Tab eventKey="home" title="Registrar">
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
									<Button ClassName="btn btn-primary" size="sm" type="submit" onClick={handleShow}>
										Registrar Espacio Comun
									</Button>
									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>Enhorabuena</Modal.Title>
										</Modal.Header>
										<Modal.Body>Espacio Comun Registrado!</Modal.Body>
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
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Card.Header} eventKey="3">
						Registro de Diario Mural
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="3">
					<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
						<Tab eventKey="home" title="Registrar">
							<Card.Body>
								<Form onSubmit={handlerOnclick}>
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
										Registro de Diario Mural
									</Button>
									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>Enhorabuena!</Modal.Title>
										</Modal.Header>
										<Modal.Body>Anuncio Registrado!</Modal.Body>
										<Modal.Footer>
											<Button variant="info" size="sm" onClick={handleClose}>
												Cerrar
											</Button>
										</Modal.Footer>
									</Modal>
								</Form>
							</Card.Body>
						</Tab>
						<Tab eventKey="profile" title="Listar ">
							<Card.Body>
								<Table striped bordered hover size="sm">
									<thead>
										<tr>
											<th>Id</th>
											<th>Titulo</th>
											<th>Anuncio</th>
											<th>tipo de publicacion</th>
										</tr>
									</thead>
									<tbody>
										{store.diario_mural.map((elemento, posicion) => {
											return (
												<tr key={posicion}>
													<td>{elemento.id_diariomural}</td>
													<td> {elemento.title_announcement}</td>
													<td>{elemento.announcement}</td>
													<td>{elemento.type_publication}</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</Card.Body>
						</Tab>
					</Tabs>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};
