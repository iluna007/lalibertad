import React from "react";
import { Link } from "react-router-dom";
import logo_EG from "../../img/logo_EG.png";

export const Navbar = () => {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container">
        <a
          href="https://www.geografia.fcs.ucr.ac.cr/index.php/es/"
          
        >
          <img src={logo_EG} />
        </a>
        <Link to="/">
          <span className="btn btn-outline-dark">Inicio</span>
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
          <Link to="/pointscloud">
            <button className="btn btn-outline-light">Nube de Puntos</button>
          </Link>
        </div>

        <div className="ml-auto">
          <Link to="/vr ">
            <button className="btn btn-outline-light">Realidad virtual</button>
          </Link>
        </div>

      </div>
    </nav>
  );
};
