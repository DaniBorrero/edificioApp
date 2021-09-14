import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light text-white bg-navbarGradiente">
				<div className="container">
					<a className="navbar-brand">TuEdificioApp</a>
					<form className="d-flex">
						<input
							id="inputNavbar"
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<a className="btn" type="submit">
							<i className="fas fa-search" />
						</a>
					</form>
				</div>
			</nav>
		</>
	);
};
