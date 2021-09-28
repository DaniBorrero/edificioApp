const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// form
			enviaremail: () => {
				const store = getStore();
				var url = "https://olive-gecko-z048x7n7.ws-us18.gitpod.io/api/enviardatos";
				var data = {
					Messages: [
						{
							From: {
								Email: "tereelena@gmail.com",
								Name: "teresa"
							},
							To: [
								{
									Email: "tuedificioapp@gmail.com",
									Name: "tuedificio"
								}
							],
							Subject: "Greetings from Mailjet.",
							TextPart: "My first Mailjet email",
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
