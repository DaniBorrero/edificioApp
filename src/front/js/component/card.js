import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export const Cards = () => {
	return (
		<>
			<Card className="bg-dark text-white mx-3">
				<Card.Text className="text-center	">Pedro Perez - Conserje</Card.Text>
				<Card.Img
					src="https://s3-sa-east-1.amazonaws.com/media.reistock.com/wp-content/uploads-mkt-wp/sites/12/2018/11/19171148/Conserje.png"
					alt="Card image"
				/>
			</Card>
		</>
	);
};
