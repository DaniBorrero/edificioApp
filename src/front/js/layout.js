import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Marketplace } from "./pages/marketplace";
import { Single } from "./pages/single";
import { LoggedScreen } from "./pages/logged";
import { RegistryForm } from "./pages/registry";
import injectContext from "./store/appContext";
import { Acordeonlogged } from "./component/acordeonlogged";
import { AdminOperation } from "./pages/operationadministrator";
import { DiarioMural } from "./pages/diariomural";
import { NavbarOne } from "./component/NavbarOne";
import { HomeOne } from "./pages/HomeOne";
import GlobalStyle from "./globalstyle";
import { Dropdown } from "react-bootstrap";
import { LoginAdmin } from "./component/LoginAdmin/LoginAdmin";
import { Footer } from "./component/Footer";

const Layout = () => {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
		console.log("funciona");
	};

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<GlobalStyle />
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarOne toggle={toggle} />
					<Dropdown open={open} toggle={toggle} />
					<Switch>
						<Route exact path="/">
							<HomeOne />
						</Route>
						<Route exact path="/registry">
							<RegistryForm />
						</Route>

						<Route exact path="/admin">
							<LoginAdmin />
						</Route>
						<Route exact path="/logged">
							<LoggedScreen />
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
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
