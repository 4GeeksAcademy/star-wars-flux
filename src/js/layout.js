import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home"; 
import Detalle from "./views/Detalle"; 
import injectContext from "./store/appContext"; 
import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer"; 

const Layout = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:tipo/:uid" element={<Detalle />} />
                </Routes>
                <Footer /> 
            </Router>
        </div>
    );
};

export default injectContext(Layout);
