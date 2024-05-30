import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VR = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>VR</h1>
    </div>
  );
};
