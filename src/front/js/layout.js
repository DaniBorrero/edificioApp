import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { RegistryForm } from "./pages/registry";
import injectContext from "./store/appContext";
import { Acordeonlogged } from "./component/acordeonlogged";
import { Marketplace } from "./pages/marketplace";
import { AdminOperation } from "./pages/operationadministrator";
import { DiarioMural } from "./pages/diariomural";
import { NavbarOne } from "./component/NavbarOne";
import { Hero } from "./component/Hero";
import { SliderData } from "./component/data/SliderData";
import { HomeOne } from "./pages/HomeOne";
import GlobalStyle from "./globalstyle";
import { Dropdown } from "react-bootstrap";
import { Footer } from "./component/Footer";
import { LoginAdmin } from "./component/LoginAdmin/LoginAdmin";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<GlobalStyle />
					<NavbarOne />
					<Dropdown />
					<Switch>
						<Route exact path="/">
							<HomeOne />
							<Footer />
						</Route>
						<Route exact path="/registry">
							<RegistryForm />
						</Route>
						<Route exact path="/admin">
							<LoginAdmin />
						</Route>
						<Route exact path="/logged">
							<Acordeonlogged />
						</Route>
						<Route exact path="/marketplace">
							<Marketplace />
						</Route>
						<Route exact path="/operationadministrator">
							<AdminOperation />
						</Route>
						<Route exact path="/diariomural">
							<DiarioMural />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
