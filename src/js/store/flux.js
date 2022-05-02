const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [

			],
			planets: [

			],
			starships: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/people")
				.then((promiseResponse) => promiseResponse.json())
				.then(data => setStore( {
					people: [...getStore().people, data]
				}))
				fetch("https://www.swapi.tech/api/planets")
				.then((promiseResponse) => promiseResponse.json())
				.then(dataPlanets => setStore( {
					planets: [...getStore().planets, dataPlanets]
				}))
				fetch("https://www.swapi.tech/api/starships")
				.then((promiseResponse) => promiseResponse.json())
				.then(dataStarships => setStore( {
					starships: [...getStore().starships, dataStarships]
				}))
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
