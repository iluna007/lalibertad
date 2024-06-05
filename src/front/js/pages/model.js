import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Model = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5"style={{height: '100vh'}}>
      <h1></h1>
      <iframe title="Speckle" src="https://app.speckle.systems/projects/5d885759a5/models/0df08c4acf#embed=%7B%22isEnabled%22%3Atrue%7D" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  );
};
