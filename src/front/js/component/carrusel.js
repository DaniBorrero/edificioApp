import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";

export const Carrusel = () => {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://ialtura.cl/_static/img/_proyectos/ap1733/ap-02.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Fachada</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://mexicodesign.com/wp-content/uploads/2018/07/1-8.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.simonetti.cl/wp-content/uploads/2017/11/gimnasio_edificio_lyon_providencia_simonetti_inmobiliaria-1600x900.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};
