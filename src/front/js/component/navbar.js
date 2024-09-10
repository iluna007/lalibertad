import React from "react";
import { Link } from "react-router-dom";
import logo_EG from "../../img/logo_EG.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://www.geografia.fcs.ucr.ac.cr/index.php/es/"
          >
            <img src={logo_EG} alt="Logo" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/raster">
                  Raster
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pointscloud">
                  Nube de Puntos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/model">
                  Modelo 3D
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Flujos de trabajo
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/flujo_cc">
                      Cloud Compare
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/flujo_rr">
                      RH + LANDS + GH
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/flujo_imprimir3d">
                      Impresión 3D
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/flujo_web_leaflet">
                      Web + Leaflet
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/flujo_web_ellipsis">
                      Web + Ellipsis
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/flujo_web_speckle">
                      Web + Speckle
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menú
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/raster">
                Raster
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pointscloud">
                Nube de Puntos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/model">
                Modelo 3D
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proceso">
                Flujos de Trabajo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
