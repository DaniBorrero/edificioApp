import React from "react";
import { Link } from "react-router-dom";

export const Form = () => {
	return (
		<>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Nombre:{" "}
					</label>
					<input type="text" className="form-control" aria-describedby="nameHelp" />
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email:{" "}
					</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					{/* <div id="emailHelp" className="form-text">
						No compartiremos su correo electrónico con nadie más.
					</div> */}

					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">
							Mensaje
						</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
					</div>
				</div>
				<button type="submit" className="btn btn-success btn-sm ml-auto">
					Enviar
				</button>
			</form>
		</>
	);
};
