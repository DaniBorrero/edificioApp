const getState = ({ getStore, getActions, setStore }) => {
	store: {
		data: [];
	}
	return {
		actions: {
			// form
			enviaremail: form => {
				const store = getStore();
				var url = "https://olive-gecko-z048x7n7.ws-us18.gitpod.io/api/enviardatos";
				var data = {
					Messages: [
						{
							/* Quién envía el mail, estos valores
							salen del formulario*/

							From: {
								//Email: form.email,
								//Name: form.name
							},
							/*no se cambia*/
							To: [
								{
									Email: "tuedificioapp@gmail.com",
									Name: "tuedificio"
								}
							] /*hasta aca*/,
							/* Este es el asunto del mail */

							Subject: "Consulta desde el frontend.",
							/* Este es el cuerpo del mail */

							//TextPart: form.text,
							/* aca es un html que puedes poner lindo para el mail */

							HTMLPart:
								"<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
							CustomID: "AppGettingStartedTest"
						}
					]
				};
				var raw = JSON.stringify(data);
				var myHeaders = { "Content-Type": "application/json" };
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};
				fetch(url, requestOptions)
					.then(response => response.json())
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

			userRegister: data => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				console.log(data, "test");
				var raw = JSON.stringify(data);
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-tomato-finch-mmoogi80.ws-us18.gitpod.io/api/user", requestOptions)
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
