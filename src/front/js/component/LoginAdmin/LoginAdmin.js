import React, { useState } from "react";
import loginadminphoto from "../../../img/loginadmin2.jpeg";
import "./LoginAdmin.css";

export const LoginAdmin = () => {
	return (
		<section>
			<div className="container">
				<div className="user signinBx">
					<div className="imgBx">
						<div className="copy">
							<h1>Bienvenido</h1>
							<p>Administrador</p>
						</div>
						<img className="photosign" alt="#" src={loginadminphoto} width="500px" height="750px" />
					</div>
					<div className="formBx">
						<form>
							<h2>Inicia Sesión</h2>
							<input type="email" name="" placeholder="Email" />
							<input type="password" name="" placeholder="Password" />
							<input type="submit" name="" value="Enviar" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
