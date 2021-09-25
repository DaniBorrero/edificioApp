import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import logoIMG from "../../img/logo.png";

export const NavBar = () => {
	return (
		<>
			<Navbar className="bg-navbarGradiente" expand="lg" fixed="top">
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<img src={logoIMG} alt="TuEdificioAPP" style={{ width: "50px" }} />
						</Navbar.Brand>
					</Link>

					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav className="me-auto">
							<Nav.Link href="/registry">Iniciar Sesión</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
