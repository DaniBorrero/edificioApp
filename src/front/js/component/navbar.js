import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";

export const NavBar = () => {
	return (
		<>
			<Navbar className="bg-navbarGradiente" expand="lg" fixed="top">
				<Container>
					<Navbar.Brand href="#home">TuEdificio</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Button className="mx-2">
						<i className="fab fa-github " />
					</Button>
					<Button className="mx-2">
						<i className="fab fa-twitter " />
					</Button>
					<Button className="mx-2">
						<i className="fab fa-instagram  " />
					</Button>
				</Container>
			</Navbar>
		</>
	);
};
