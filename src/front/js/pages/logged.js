import React from "react";
import { Acordeonlogged } from "../component/acordeonlogged";
import { Container, Row } from "react-bootstrap";
import "../../styles/registry.scss";

export const LoggedScreen = () => {
	return (
		<>
			<Container className="loggedContainer">
				<Row>
					<Acordeonlogged />
				</Row>
			</Container>
			;
		</>
	);
};
