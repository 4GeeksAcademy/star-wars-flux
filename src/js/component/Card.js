import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item, tipo }) => {
    const {store, actions} = useContext(Context);

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card-image ">
                <img style={{width:"100%"}} src={`https://starwars-visualguide.com/assets/img/${ tipo === "people" ? "characters" : tipo}/${item.uid}.jpg`} alt="" />
            </div>
            <div>
                <div className="info text-white">
                    <h5>{item.name}</h5>
                    <p>
                        Gender: 
                        <br></br>
                        Hair Color: 
                        <br></br>
                        Eye Color:
                    </p>
                </div>
                <div className="botones ">
                <Link to={`/details/${tipo}/${item.uid}`} className="btn btn-brown-yellow">Learn more!</Link>
                    <button onClick={(evento)=>{
                        evento.stopPropagation();
                        store.favoritos.some(fav => fav.uid === item.uid && fav.tipo === tipo) 
                        ?
                        actions.quitarFavorito(item, tipo)
                        :
                        actions.añadirFavorito(item, tipo)
                    }}> 
                        <i className={store.favoritos.some(fav => fav.uid === item.uid && fav.tipo === tipo) ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;