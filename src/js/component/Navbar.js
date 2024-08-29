import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const navbarStyle = {
    paddingTop: '0',
    paddingBottom: '0',
    height: '60px'
  };

  const imageStyle = {
    width: '110px',
    height: 'auto',
  };

  return (
    <nav className="navbar navbar-light bg-marron" style={navbarStyle}>
      <Link to="/">
        <img
          src="https://i.pinimg.com/564x/1b/b5/da/1bb5dab5e6ddd60f391f37be838117ba.jpg"
          alt="logo"
          style={imageStyle}
        />
      </Link>

      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Favoritos <span className="badge badge-light">{store.favoritos.length}</span>
        </button>

        <div className="dropdown me-5 dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          {store.favoritos.length > 0 ? (
            store.favoritos.map((favorito, index) => (
              <div
                key={index}
                className="dropdown-item d-flex justify-content-between align-items-center">
                <Link
                  to={`/details/${favorito.tipo}/${favorito.uid}`}
                  className="dropdown-item">
                  {favorito.name}
                </Link>
                <button 
                  onClick={() => actions.quitarFavorito(favorito, favorito.tipo)} 
                  className="btn btn-sm btn-danger ms-2"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))
          ) : (
            <p className="dropdown-item">No hay nada agregado</p>
          )}
        </div>
      </div>
    </nav>
  );
};
