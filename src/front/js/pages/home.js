// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Carrusel } from "../component/carrusel";
// import { Cards } from "../component/card";
// import { FormContact } from "../component/formContact";
// import { CardGroup, Card } from "react-bootstrap";
// import { Certificate } from "../component/certificate";

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<>
// 			<div className="container-fluid my-3">
// 				<Carrusel className="my-3" />
// 			</div>
// 			<hr className="container" />
// 			<h2 className="text-center">Certificados</h2>

// 			<div className="container my-5">
// 				<CardGroup>
// 					<Cards />
// 					<Cards />
// 					<Cards />
// 				</CardGroup>
// 			</div>

// 			<hr className="container" />

// 			<div className="container my-5">
// 				<h2 className="text-center">Nuestros Colaboradores.</h2>
// 				<CardGroup className="p-5">
// 					<Cards />
// 					<Cards />
// 					<Cards />
// 				</CardGroup>
// 			</div>

// 			<hr className="container" />

// 			<div className="container my-5">
// 				<CardGroup className="container my-5">
// 					<Card className="mx-3 border-none">
// 						<FormContact />
// 					</Card>
// 				</CardGroup>
// 			</div>
// 			<hr className="container" />

// 			<div className="container my-5">
// 				<CardGroup className="p-5">
// 					<Certificate />
// 					<Certificate />
// 					<Certificate />
// 				</CardGroup>
// 			</div>
// 		</>
// 	);
// };
