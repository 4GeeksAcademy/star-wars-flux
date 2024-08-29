import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// URL de imagen por defecto
const defaultImage = "https://i.pinimg.com/564x/7f/34/e8/7f34e8c37690811364f02571d7e1c469.jpg";

const Card = ({ item, tipo }) => {
  const { store, actions } = useContext(Context);
  const [detalles, setDetalles] = useState(null); 

  const imageUrl = `https://starwars-visualguide.com/assets/img/${tipo === "people" ? "characters" : tipo}/${item.uid}.jpg`;

  useEffect(() => {
    actions.cargarDetallesItem(tipo, item.uid);
  }, [item.uid, tipo]);

  useEffect(() => {
    const detallesItem = store.detalles[`${tipo}-${item.uid}`];
    setDetalles(detallesItem);
  }, [store.detalles, item.uid, tipo]);

  const fieldsToShow = {
    people: ["gender", "hair_color", "eye_color"],
    planets: ["population", "terrain"],
    vehicles: Object.keys(detalles || {}).slice(0, 2) 
  };

  const isFavorito = store.favoritos.some((fav) => fav.uid === item.uid && fav.tipo === tipo);

  return (
    <div className="col-12 col-md-3 col-lg-2 mb-3"> {/* Columnas responsivas y margen inferior */}
       <div
        className="card h-100 text-dark" 
        style={{ maxWidth: '14rem', backgroundColor: "beige" }} 
      >
        <img
          className="card-img-top"
          src={imageUrl}
          alt={item.name}
          onError={(e) => (e.target.src = defaultImage)} // Si la imagen falla, usar la imagen por defecto
        />
        <div className="card-body"> 
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {detalles ? (
              <>
                {fieldsToShow[tipo].map((field, index) => (
                  detalles[field] && (
                    <span key={index}>
                      <strong>{field.replace('_', ' ')}:</strong> {detalles[field]}<br />
                    </span>
                  )
                ))}
              </>
            ) : (
              "Cargando detalles..."
            )}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center"> 
          <Link to={`/details/${tipo}/${item.uid}`} className="btn btn-brown-yellow">
            Leer más!
          </Link>
          <button
            onClick={(evento) => {
              evento.stopPropagation();
              isFavorito
                ? actions.quitarFavorito(item, tipo)
                : actions.añadirFavorito(item, tipo);
            }}
            className={`btn btn-icon ${isFavorito ? "btn-favorito" : "btn-no-favorito"}`} 
          >
            <i className={isFavorito ? "fas fa-heart" : "far fa-heart"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
