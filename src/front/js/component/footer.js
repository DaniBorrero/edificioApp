import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-navbarGradiente">
		<p className="text-white">2021 ©Tu edificio Derechos reservados.</p>

		<div className="container">
			<ul className="social-icons">
				<li>
					<a href="#">
						<i className="fa fa-instagram" />
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-twitter" />
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-linkedin" />
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-github" />
					</a>
				</li>
			</ul>
		</div>
	</footer>
);
