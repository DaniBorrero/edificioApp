import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarUserData = [
	{
		title: "Inicio",
		path: "/inicio",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text"
	},
	{
		title: "Mensajes",
		path: "/mensajes",
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: "nav-text"
	},
	{
		title: "MarketPlace",
		path: "/marketplace",
		icon: <FaIcons.FaCartPlus />,
		cName: "nav-text"
	},
	{
		title: "Reservas",
		path: "/reservas",
		icon: <IoIcons.IoMdPeople />,
		cName: "nav-text"
	}
];
