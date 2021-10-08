import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const DateP = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [espacio, setEspacio] = useState("");

	let date = new Date();
	console.log(date);

	const onChangeValue = event => {
		setEspacio(event.target.value);
		console.log(espacio);
	};

	let handleColor = time => {
		return time.getHours() > 12 ? "text-success" : "text-error";
	};

	return (
		<>
			<DatePicker
				showTimeSelect
				selected={startDate}
				onChange={date => {
					setStartDate(date);
					console.log(date);
				}}
				timeClassName={handleColor}
			/>

			<div className="App" style={{ display: "flex" }}>
				<div onChange={onChangeValue}>
					<input type="radio" value="Quincho" name="espacio" />
					Quincho
					<input type="radio" value="Piscina" name="espacio" />
					Piscina
					<input type="radio" value="Gimnasio" name="espacio" />
					Gimnasio
				</div>
			</div>
		</>
	);
};
