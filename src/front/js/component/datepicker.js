import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const DateP = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [espacio, setEspacio] = useState("Piscina");

	let date = new Date();

	const onChangeValue = event => {
		setEspacio(event.target.value);
	};

	useEffect(
		() => {
			const onChangeValue = event => {
				setEspacio(event.target.value);
			};
			console.log(espacio);
		},
		[espacio]
	);

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
				<div>
					<input
						id="Quincho"
						type="radio"
						value="Quincho"
						name="espacio"
						checked={espacio == "Quincho" ? true : false}
						onChange={onChangeValue}
					/>
					Quincho
					<input
						id="Piscina"
						type="radio"
						value="Piscina"
						name="espacio"
						checked={espacio == "Piscina" ? true : false}
						onChange={onChangeValue}
					/>
					Piscina
					<input
						id="Gimnasio"
						type="radio"
						value="Gimnasio"
						name="espacio"
						checked={espacio == "Gimnasio" ? true : false}
						onChange={onChangeValue}
					/>
					Gimnasio
				</div>
			</div>
		</>
	);
};
