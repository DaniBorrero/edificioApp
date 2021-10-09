import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Marketplace } from "./pages/marketplace";
import { Single } from "./pages/single";
import { LoggedScreen } from "./pages/logged";
import { RegistryForm } from "./pages/registry";
import { FuncionesPrincipales } from "./pages/logged";

import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Acordeonlogged } from "./component/acordeonlogged";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/registry">
							<RegistryForm />
						</Route>
						<Route exact path="/marketplace">
							<h1>Aca debemos mostrar todos los datos del marketplace</h1>
						</Route>
						<Route exact path="/logged">
							<LoggedScreen />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
						<Route exact path="/marketplace">
							<Marketplace />
						</Route>
					</Switch>
				</ScrollToTop>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
