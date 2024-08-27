const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			favoritos: [],
		},

		actions: {
			cargarDatosPersonajes: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/people/");
					const data = await res.json();
					setStore({personajes: data.results});
				} catch (error) {
					console.error("Error al cargar los personajes:", error);
				}
			},

			cargarDatosPlanetas: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/planets/");
					const data = await res.json();
					setStore({planetas: data.results});
				} catch (error) {
					console.error("Error al cargar los planetas:", error);
				}
			},

			cargarDatosVehiculos: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await res.json();
					setStore({vehiculos: data.results});
				} catch (error) {
					console.error("Error al cargar los vehiculos:", error);
				}
			},

			añadirFavorito: (item, tipo) => {
                const store = getStore();
                const newItem = { 
                    ...item, 
                    tipo: tipo 
                };
                if (!store.favoritos.some((fav) => fav.uid === item.uid && fav.tipo === tipo)) {
                    setStore({ favoritos: [...store.favoritos, newItem] });
                }
            },
			
			quitarFavorito: (item, tipo) => {
                const store = getStore();
                const ActualizarFavoritos = store.favoritos.filter(fav => fav.uid !== item.uid || fav.tipo !== tipo);
                setStore({ favoritos: ActualizarFavoritos });
            },
		}
	};
};

export default getState;
