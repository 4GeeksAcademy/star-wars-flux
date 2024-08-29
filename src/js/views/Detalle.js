import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Detalle = () => {
    const { store, actions } = useContext(Context);
    const { tipo, uid } = useParams();
    const [detalle, setDetalle] = useState(null);

    const baseURL = "https://starwars-visualguide.com/assets/img";

    const getImageUrl = () => {
        let path = "";
        if (tipo === "people") path = "characters";
        else if (tipo === "planets") path = "planets";
        else if (tipo === "vehicles") path = "vehicles";
        return `${baseURL}/${path}/${uid}.jpg`;
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await actions.obtenerDetalles(tipo, uid);
            setDetalle(data);
        };
        fetchData();
    }, [tipo, uid]);

    if (!detalle) return <div>Loading...</div>;

    return (
        <div className="detalle-container">
            <h1>{detalle.properties.name}</h1>

            <div className="detalle-imagen">
                <img src={getImageUrl()} alt={detalle.properties.name} />
            </div>

            <div className="detalle-info">
                <p>{detalle.description}</p>
                {tipo === "people" && (
                    <>
                        <p>Gender: {detalle.properties.gender}</p>
                        <p>Height: {detalle.properties.height}</p>
                        <p>Mass: {detalle.properties.mass}</p>
                        <p>Hair Color: {detalle.properties.hair_color}</p>
                        <p>Eye Color: {detalle.properties.eye_color}</p>
                    </>
                )}
                {tipo === "planets" && (
                    <>
                        <p>Population: {detalle.properties.population}</p>
                        <p>Climate: {detalle.properties.climate}</p>
                        <p>Terrain: {detalle.properties.terrain}</p>
                        <p>Diameter: {detalle.properties.diameter}</p>
                    </>
                )}
                {tipo === "vehicles" && (
                    <>
                        <p>Model: {detalle.properties.model}</p>
                        <p>Manufacturer: {detalle.properties.manufacturer}</p>
                        <p>Cost: {detalle.properties.cost_in_credits} credits</p>
                        <p>Max Speed: {detalle.properties.max_atmosphering_speed}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Detalle;
