import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://s3-sa-east-1.amazonaws.com/media.reistock.com/wp-content/uploads-mkt-wp/sites/12/2018/11/19171148/Conserje.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card&apos;s
						content.
					</p>
				</div>
			</div>
		</>
	);
};
