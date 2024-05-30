import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const PointsCloud = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Nube de puntos</h1>
      <iframe title="Ellipsis Drive Viewer" src="https://app.ellipsis-drive.com?pathId=b4240b91-6f4d-424a-8c1d-33104152a8ed" />
    </div>
  );
};
