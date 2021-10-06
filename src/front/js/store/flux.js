const getState = ({ getStore, getActions, setStore }) => {
	store: {
		logged: false;
	}
	return {
		actions: {
			// form

			enviaremail: (name, email, text) => {
				console.log("flux", name, email, text);
				//var url = "https://olive-gecko-z048x7n7.ws-us18.gitpod.io/api/enviardatos";
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
			},

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
					.then(response => response.text())
					.then(result => {
						sessionStorage.setItem("token", result.token);
						setStore({ logged: true });
					})
					.catch(error => console.log("error", error));
			},

			userRegister: data => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-sapphire-crow-ulv91v34.ws-us18.gitpod.io/api/register", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

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
		}
	};
};

export default getState;
