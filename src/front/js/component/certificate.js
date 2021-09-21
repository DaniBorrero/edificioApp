import React from "react";
import { Card } from "react-bootstrap";

export const Certificate = () => {
	return (
		<>
			<Card className="mx-3 border-none" style={{ width: "18rem" }}>
				<Card.Img
					className="border-none"
					variant="top"
					src="https://live.staticflickr.com/3378/3586989687_2699b0ba72_w.jpg"
				/>
				<Card.Body>
					<Card.Title>Mejor certificacion EVER!</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};
