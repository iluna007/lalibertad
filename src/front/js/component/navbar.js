import React from "react";
import { Link } from "react-router-dom";
import logo_EG from "../../img/logo_EG.png";

export const Navbar = () => {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link to="https://www.geografia.fcs.ucr.ac.cr/index.php/es/">
		  <img src={logo_EG} />
        </Link>
        <Link to="/">
          <span className="btn btn-outline-light">Inicio</span>
        </Link>
        {/* <div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}
        <div className="ml-auto">
          <Link to="/raster">
            <button className="btn btn-outline-light">Raster</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/raster">
            <button className="btn btn-outline-light">Nube de Puntos</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
