import React, { useEffect, useContext, useRef } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card";   

export const Home = () => {
    const { actions, store } = useContext(Context);

    const personajesCarrusel = useRef(null);
    const planetasCarrusel = useRef(null);
    const vehiculosCarrusel = useRef(null);

    useEffect(() => {
        actions.cargarDatosPersonajes();
        actions.cargarDatosPlanetas();
        actions.cargarDatosVehiculos();
    }, []);

    const handleLeftClick = (carruselRef) => {
        carruselRef.current.scrollLeft -= carruselRef.current.offsetWidth;
    };

    const handleRightClick = (carruselRef) => {
        carruselRef.current.scrollLeft += carruselRef.current.offsetWidth;
    };

    return (
        <div className="container mt-5 text-warning ">

            <h2>Personajes</h2>
            <div className="carrusel-container">
                <div className="carrusel " ref={personajesCarrusel}>
                    {store.personajes.map((personaje, index) => (
                        <Card key={index} item={personaje} tipo="people" />
                    ))}
                    
                </div>
                <div className="buttons">
                    <button onClick={() => handleLeftClick(personajesCarrusel)}>
                        <img src="https://i.pinimg.com/564x/fb/a3/f0/fba3f0028fdbb43c4b266ab397a1b8e0.jpg" alt="Scroll Left" />
                    </button>
                    <button onClick={() => handleRightClick(personajesCarrusel)}>
                        <img src="https://i.pinimg.com/564x/f8/6a/0c/f86a0cac8081ff9bf30ec80e368a7d74.jpg" alt="Scroll Right" />
                    </button>
                </div>
            </div>
<br></br>
            <h2>Planetas</h2>
            <div className="carrusel-container">
                <div className="carrusel" ref={planetasCarrusel}>
                    {store.planetas.map((planeta, index) => (
                        <Card key={index} item={planeta} tipo="planets" />
                    ))}
                </div>
                
                <div className="buttons">
                    <button onClick={() => handleLeftClick(planetasCarrusel)}>
                        <img src="https://i.pinimg.com/564x/fb/a3/f0/fba3f0028fdbb43c4b266ab397a1b8e0.jpg" alt="Scroll Left" />
                    </button>
                    <button onClick={() => handleRightClick(planetasCarrusel)}>
                        <img src="https://i.pinimg.com/564x/f8/6a/0c/f86a0cac8081ff9bf30ec80e368a7d74.jpg" alt="Scroll Right" />
                    </button>
                </div>
            </div>
<br></br>
            <h2>Vehículos</h2>
            <div className="carrusel-container">
                <div className="carrusel" ref={vehiculosCarrusel}>
                    {store.vehiculos.map((vehiculo, index) => (
                   
                        <Card key={index} item={vehiculo} tipo="vehicles" />
                   
                    ))}
                </div>
                <div className="buttons">
                    <button onClick={() => handleLeftClick(vehiculosCarrusel)}>
                        <img src="https://i.pinimg.com/564x/fb/a3/f0/fba3f0028fdbb43c4b266ab397a1b8e0.jpg" alt="Scroll Left" />
                    </button>
                    <button onClick={() => handleRightClick(vehiculosCarrusel)}>
                        <img src="https://i.pinimg.com/564x/f8/6a/0c/f86a0cac8081ff9bf30ec80e368a7d74.jpg" alt="Scroll Right" />
                    </button>
                </div>
            </div>
        </div>
    );
};