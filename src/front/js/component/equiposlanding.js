import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Perfil1 from "../../img/Perfil1.png";
import Perfil2 from "../../img/Perfil2.png";
import Perfil3 from "../../img/Perfil3.png";
import Perfil4 from "../../img/Perfil4.png";
import Perfil5 from "../../img/Perfil5.png";

export const EquiposLanding = () => {
	return (
		<>
			<div className="text-center">
				<h1>Nuestro Equipo</h1>
				<br />
			</div>
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
					<Card.Img variant="top" src={Perfil2} />
					<Card.Body>
						<Card.Title>Emerson Ahumada</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={Perfil3} />
					<Card.Body>
						<Card.Title>Jorge Barahona</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={Perfil4} />
					<Card.Body>
						<Card.Title>Pedro Mengarelli</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src={Perfil5} />
					<Card.Body>
						<Card.Title>Teresa Andrade</Card.Title>
						<Card.Text>Desarrollador Full-Stack</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</>
	);
};
