import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";

export const NavBar = () => {
	return (
		<>
			<Navbar className="bg-navbarGradiente" expand="lg" fixed="top">
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<i className="fas fa-hotel mx-3" />
							TuEdificioApp
						</Navbar.Brand>
					</Link>

					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav className="me-auto">
							<Nav.Link href="/registry">Iniciar Sesion</Nav.Link>

							<Button className="mx-2">
								<i className="fab fa-github " />
							</Button>
							<Button className="mx-2">
								<i className="fab fa-twitter " />
							</Button>
							<Button className="mx-2">
								<i className="fab fa-instagram  " />
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
