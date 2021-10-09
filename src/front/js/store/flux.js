const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user: ""
		},		

		actions: {
			registraredificio: (NameBuilding, Address, Region, Comuna) => {
				console.log("flux edificio", NameBuilding, Address, Region, Comuna);
				var raw = JSON.stringify({
					name: NameBuilding,
					adress: Address,
					region: Region,
					comuna: Comuna
				});
				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};
				fetch("https://3001-olive-gecko-z048x7n7.ws-us18.gitpod.io/api/building", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}, // fin de registrar edificio
			registrarapartamento: (NumApartment, FloorApartment) => {
				console.log("flux apartamento", NumApartment, FloorApartment);
				var raw = JSON.stringify({
					num_apartment: NumApartment,
					floor_apartment: FloorApartment
				});
				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};
				fetch("https://3001-olive-gecko-z048x7n7.ws-us18.gitpod.io/api/apartment", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}, // fin de registrar apartamento
			registrarespaciocomun: (CommonSpace, Aforo) => {
				console.log("flux registrar espacio comun", CommonSpace, Aforo);
				var raw = JSON.stringify({
					name: CommonSpace,
					aforo: Aforo
				});
				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};
				fetch("https://3001-olive-gecko-z048x7n7.ws-us18.gitpod.io/api/commonSpace", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}, //fin de regitrar espacio comun
			getespaciocomun: () => {
				const store = getStore();
				fetch("https://3001-olive-gecko-z048x7n7.ws-us18.gitpod.io/api/commonSpace")
					.then(response => response.json())
					.then(result => {
						setStore({ espacio_comun: result });
						//console.log(store.espacio_comun);
					})
					.catch(error => console.log("error", error));
			}, //fin de espacio comun
			registrardiariomural: (Titulo, TipoPublicacion, Anuncio) => {
				console.log("flux registrar diario mural", Titulo, TipoPublicacion, Anuncio);
				var raw = JSON.stringify({
					title_announcement: Titulo,
					type_publication: TipoPublicacion,
					announcement: Anuncio
				});
				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};
				fetch("https://3001-olive-gecko-z048x7n7.ws-us18.gitpod.io/api/diariomural", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}, //fin de registrardiariomural
			getdiariomural: () => {
				const store = getStore();
				fetch("https://3001-olive-gecko-z048x7n7.ws-us18.gitpod.io/api/diariomural")
					.then(response => response.json())
					.then(result => {
						setStore({ diario_mural: result });
						//console.log(store.espacio_comun);
					})
					.catch(error => console.log("error", error));
			}, //fin de getdirariomural
			enviaremail: (name, email, text) => {
				console.log("flux", name, email, text);
				var data = {
					Messages: [
						{
							/* Quién envía el mail, estos valores
										salen del formulario*/

							From: {
								Email: "tuedificioapp@gmail.com",
								Name: name
							},
							/*no se cambia*/
							To: [
								{
									Email: "tuedificioapp@gmail.com",
									Name: "tuedificio"
								}
							] /*hasta aca*/,
							/* Este es el asunto del mail */

							Subject: "Correo enviado desde el Formulario",
							/* Este es el cuerpo del mail */

							TextPart: text + email,

							/* aca es un html que puedes poner lindo para el mail */

							HTMLPart:
								"<h5> El usuario:</h5>" +
								email +
								"  envió el siguiente mensaje: " +
								text +
								"<br/> TuEdificio © 2021",
							CustomID: "AppGettingStartedTest"
						}
					]
				};
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				console.log(data, "prueba");

				var raw = JSON.stringify(data);
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-sapphire-crow-ulv91v34.ws-us18.gitpod.io/api/enviardatos", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}, // fin de enviar email
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			loginUser: (emailLogin, passLogin) => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var raw = JSON.stringify({ email: emailLogin, password: passLogin });

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-sapphire-crow-ulv91v34.ws-us18.gitpod.io/api/user", requestOptions)
					.then(response => response.json())
					.then(res => {
						localStorage.setItem("token", res.token);
						setStore({ token: res.token });
						setStore({ user: res.info_user });
						alert("Bienvenido: " + store.user.full_name);
						location = "/logged";
					})
					.catch(error => console.log("error", error));
			}, // fin loginUser

			userRegister: (email, pass, phone, name) => {
				console.log(email, pass, phone, name);
				//var myHeaders = new Headers();
				//myHeaders.append("Content-Type", "application/json");
				var raw = JSON.stringify({
					full_name: name,
					email: email,
					password: pass,
					phone: phone,
					numero_apartment: null,
					id_building: null,
					numero_bodega: null
				});

				var requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-sapphire-crow-ulv91v34.ws-us18.gitpod.io/api/register", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}, // fin de UserRegister

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		} // fin de actions
	}; // fin de return
}; // fin de const getstate

export default getState;
