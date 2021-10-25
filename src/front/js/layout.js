import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Marketplace } from "./pages/marketplace";
import { LoggedScreen } from "./pages/logged";
import { RegistryForm } from "./pages/registry";
import injectContext from "./store/appContext";
import { AdminOperation } from "./pages/operationadministrator";
import { DiarioMural } from "./pages/diariomural";
import { HomeOne } from "./pages/HomeOne";
import GlobalStyle from "./globalstyle";
import { Footer } from "./component/Footer";
import { SidebarUser } from "./component/SidebarUser/SidebarUser";
import { SidebarAdmin } from "./component/SidebarAdmin/SidebarAdmin";
import { LoginManager } from "./pages/LoginManager";
import { Servicios } from "./pages/Servicios";
import { NavbarLanding } from "./component/NavbarLanding/NavbarLanding";
import { Proyectos } from "./pages/Proyectos";
import { Contacto } from "./pages/Contacto";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<GlobalStyle />
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<NavbarLanding />
							<HomeOne />
							<Footer />
						</Route>
						<Route exact path="/servicios">
							<NavbarLanding />
							<Servicios />
							<Footer />
						</Route>
						<Route exact path="/proyectos">
							<NavbarLanding />
							<Proyectos />
							<Footer />
						</Route>
						<Route exact path="/equipo">
							<NavbarLanding />
							<Footer />
						</Route>
						<Route exact path="/contacto">
							<Contacto />
						</Route>
						<Route exact path="/login">
							<NavbarLanding />
							<RegistryForm />
							<Footer />
						</Route>
						<Route exact path="/loginadmin">
							<LoginManager />
							<Footer />
						</Route>
						<Route exact path="/user">
							<SidebarUser />
							<LoggedScreen />
						</Route>
						<Route exact path="/inicio">
							<SidebarUser />
							<LoggedScreen />
						</Route>
						<Route exact path="/mensajes">
							<SidebarUser />
							<LoggedScreen />
						</Route>
						<Route exact path="/marketplace">
							<SidebarUser />
							<Marketplace />
						</Route>
						<Route exact path="/reservas">
							<SidebarUser />
							<DiarioMural />
						</Route>
						<Route exact path="/admin">
							<SidebarAdmin />
							<AdminOperation />
						</Route>
						<Route exact path="/registroedificio">
							<SidebarAdmin />
							<AdminOperation />
						</Route>
						<Route exact path="/registrodepartamento">
							<SidebarAdmin />
							<AdminOperation />
						</Route>
						<Route exact path="/registroecomunes">
							<SidebarAdmin />
							<AdminOperation />
						</Route>
						<Route exact path="/diariomuraladmin">
							<SidebarAdmin />
							<AdminOperation />
						</Route>
						<Route exact path="/mensajeusuario">
							<SidebarAdmin />
							<AdminOperation />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
