import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";

export const Carrusel = () => {
	return (
		<>
			<Carousel fluid>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://ialtura.cl/_static/img/_proyectos/ap1733/ap-02.jpg"
						alt="First slide"
					/>
					<div>
						<Carousel.Caption className="bg-dark carrusel-opacity p-0 m-0">
							<h3 className="none-opacity">Fachada</h3>
							<p className="none-opacity">Nulla vitae elit libero, a pharetra augue mollis .</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://mexicodesign.com/wp-content/uploads/2018/07/1-8.jpg"
						alt="Second slide"
					/>

					<div>
						<Carousel.Caption className="bg-dark carrusel-opacity p-0">
							<h3 className="none-opacity">Fachada</h3>
							<p className="none-opacity">Nulla vitae elit libero, a pharetra augue mollis .</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 "
						src="https://www.simonetti.cl/wp-content/uploads/2017/11/gimnasio_edificio_lyon_providencia_simonetti_inmobiliaria-1600x900.jpg"
						alt="Third slide"
					/>

					<div>
						<Carousel.Caption className="bg-dark carrusel-opacity p-0">
							<h3 className="none-opacity">Fachada</h3>
							<p className="none-opacity">Nulla vitae elit libero, a pharetra augue mollis .</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
			</Carousel>
		</>
	);
};
