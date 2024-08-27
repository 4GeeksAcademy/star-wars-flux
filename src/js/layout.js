import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import Detalle from "./views/Detalle";
import injectContext from "./store/appContext";
import { Navbar } from "./component/Navbar";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:tipo/:id" element={<Detalle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
	);
};

export default injectContext(Layout);
