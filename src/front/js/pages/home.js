import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { Cards } from "../component/card";
import { FormContact } from "../component/formContact";
import { CardGroup, Card } from "react-bootstrap";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container my-3">
				<Carrusel className="my-3" />
			</div>
			<hr />
			<div className="container my-3">
				<CardGroup>
					<Cards />
					<Cards />
					<Cards />
				</CardGroup>
			</div>

			<hr />

			<div className="container my-3">
				<CardGroup>
					<Card className="mx-3 border none">
						<Card.Img
							variant="top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MbRrwlP4MtsSXkIG-XBxvCnAQi5NuzQpqQ&usqp=CAU"
						/>
					</Card>
					<Card className="mx-3 border-none">
						<FormContact />
					</Card>
				</CardGroup>
			</div>

			<hr />

			<div className="container my-3" />
		</>
	);
};
