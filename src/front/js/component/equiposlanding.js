import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Perfil1 from "../../img/Perfil1.jpg";



export const EquiposLanding = () => {
	return (
		<>
			<CardGroup>
				<h1>Nuestro Equipo</h1>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Daniel Borrero</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Emerson Ahumada</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Jorge Barahona</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={Perfil1} />
					<Card.Body>
						<Card.Title>Pedro Mengarelli</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Teresa Andrade</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</>
	);
};
