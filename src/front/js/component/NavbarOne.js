import React from "react";
import { Button } from "./Button";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../../js/component/data/MenuData";
import Edi from "../../img/logo.png";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
	height: 70px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
`;

const NavLinks = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0rem 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
	font-size: 22px;
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

	@media screen and (max-width: 768px) {
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

	@media screen and (max-width: 768px) {
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

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavbarOne = () => {
	return (
		<Nav>
			<Logo to="/" />
			<MenuBars />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				<Button to="/login" primary="true">
					Inicio
				</Button>
			</NavBtn>
		</Nav>
	);
};
