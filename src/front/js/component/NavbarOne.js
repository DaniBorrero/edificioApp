import React, { useEffect, useState, useContext } from "react";
import { Button } from "./Button";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../../js/component/data/MenuData";
import Edi from "../../img/logo.png";
import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const Nav = styled.nav`
	height: 70px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
	background: #00447c !important;
`;

const NavLinks = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0rem 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none !important;
	font-size: 23px;
	font-weight: 500;
`;
const Logo = styled.i`
	background-image: url(${Edi});
	background-size: contain;
	display: block;
	height: 50px;
	color: #fff;
	width: 50px;
	cursor: pointer;
	position: flex;
	top: 0;
	right: 0;
`;
const MenuBars = styled(FaBars)`
	display: none;

	@media screen and (max-width: 767px) {
		color: #fff;
		display: block;
		background-size: contain;
		height: 40px;
		width: 40px;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-50%, 35%);
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -48px;

	@media screen and (max-width: 767px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLinks};
`;
const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const NavbarOne = props => {
	const { store, actions } = useContext(Context);
	const [navbar, setNavbar] = useState(false);
	const location = useLocation();

	const handlerlogOut = e => {
		e.preventDefault();
		actions.clearToken();
	};

	const changeBackground = () => {
		if (window.pageYOffset >= 70) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener("scroll", changeBackground);
		};

		watchScroll();

		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	let style = {
		background: navbar || location.pathname !== "/" ? "#00447c !important" : "transparent",
		transition: "0.4s"
	};

	return (
		<Nav style={style}>
			<Link to="/">
				<Logo to="/" />
			</Link>
			<MenuBars onClick={props.toggle} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				{localStorage.getItem("token") != null ? (
					<Button to="/" primary="true">
						Cerrar Session
						{/* {localStorage.removeItem("token")} */}
					</Button>
				) : (
					<Button to="/registry" primary="true">
						iniciar
					</Button>
				)}
			</NavBtn>
		</Nav>
	);
};

NavbarOne.propTypes = { toggle: PropTypes.any };
