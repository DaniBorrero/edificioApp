import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { Cards } from "../component/card";
import { Form } from "../component/formContact";
import { CardGroup } from "react-bootstrap";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container my-3">
				<Carrusel />
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
				<div className="row">
					<div className="col-6">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MbRrwlP4MtsSXkIG-XBxvCnAQi5NuzQpqQ&usqp=CAU" />
					</div>
					<div className="col-6">
						<Form />
					</div>
				</div>
			</div>
		</>
	);
};
