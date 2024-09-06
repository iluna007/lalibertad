import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Raster } from "./pages/raster";
import { PointsCloud } from "./pages/pointscloud";
import { Model } from "./pages/model";
import { Flujo_cc } from "./pages/flujo_cc";
import { Flujo_rr } from "./pages/flujo_rr";
import { Flujo_imprimir3d } from "./pages/flujo_imprimir3d";
import { Flujo_web_leaflet } from "./pages/flujo_web_leaflet";
import { Flujo_web_ellipsis } from "./pages/flujo_web_ellipsis";
import { Flujo_web_speckle } from "./pages/flujo_web_speckle";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import "../styles/home.css";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Raster />} path="/raster" />
            <Route element={<PointsCloud />} path="/pointscloud" />
            <Route element={<Model />} path="/model" />
            <Route element={<Flujo_cc />} path="/flujo_cc" />
            <Route element={<Flujo_rr />} path="/flujo_rr" />
            <Route element={<Flujo_imprimir3d />} path="/flujo_imprimir3d" />
            <Route element={<Flujo_web_leaflet />} path="/flujo_web_leaflet" />
            <Route
              element={<Flujo_web_ellipsis />}
              path="/flujo_web_ellipsis"
            />
            <Route element={<Flujo_web_speckle />} path="/flujo_web_speckle" />

            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
