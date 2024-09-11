import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          ></a>
          <p className="text-body-secondary"> © 2024 Universidad de Costa Rica. Desarrollo Facultad de Ciencias Sociales
		  Escuela de geografia. </p>
          <p className="text-body-secondary"> Diseño: Iker Luna</p>
          <p className="text-body-secondary"> Contacto: iker.luna@ucr.ac.cr</p>
          <p className="text-body-secondary"> Prototipo V1.0</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Secciones</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Inicio
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/raster" className="nav-link p-0 text-body-secondary">
                Raster
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/pointscloud"
                className="nav-link p-0 text-body-secondary"
              >
                Nube de Puntos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/model" className="nav-link p-0 text-body-secondary">
                Modelo 3D
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Subir
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Flujos de trabajo</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/flujo_cc" className="nav-link p-0 text-body-secondary">
                Cloud Compare
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/flujo_rr" className="nav-link p-0 text-body-secondary">
                RH+LANDS+GH
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/flujo_imprimir3d"
                className="nav-link p-0 text-body-secondary"
              >
                Impresión 3D
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/flujo_web_leaflet"
                className="nav-link p-0 text-body-secondary"
              >
                web+leaflet
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/flujo_web_ellipsis"
                className="nav-link p-0 text-body-secondary"
              >
                web+ellipsis
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/flujo_web_speckle"
                className="nav-link p-0 text-body-secondary"
              >
                web+speckle
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Enlances</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="https://enterprise.dji.com/dji-terra"
                className="nav-link p-0 text-body-secondary"
              >
                Terra DJI
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.danielgm.net/cc/"
                className="nav-link p-0 text-body-secondary"
              >
                Cloud Compare
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.rhino3d.com/"
                className="nav-link p-0 text-body-secondary"
              >
                Rhinoceros3D
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://rhinolands.com/"
                className="nav-link p-0 text-body-secondary"
              >
                RhinoLands
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://www.grasshopper3d.com/"
                className="nav-link p-0 text-body-secondary"
              >
                Grasshopper3D
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://ultimaker.com/es/software/ultimaker-cura/"
                className="nav-link p-0 text-body-secondary"
              >
                Ultimaker CURA
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://ellipsis-drive.com/"
                className="nav-link p-0 text-body-secondary"
              >
                Ellipsis Drive
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://leafletjs.com/"
                className="nav-link p-0 text-body-secondary"
              >
                Leaflet
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://speckle.systems/"
                className="nav-link p-0 text-body-secondary"
              >
                Speckle
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </footer>
);
