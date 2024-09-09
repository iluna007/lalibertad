import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const PointsCloud = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5"style={{height: '100vh'}}>
      <h1></h1>
      <iframe title="Ellipsis Drive Viewer" src="https://app.ellipsis-drive.com/view?pathId=4b1495df-2bfc-4f24-b06d-ad45fa314303&state=02a75152-bfee-480b-954e-85480c4d1166" height="100%" width="100%"/>
    </div>
  );
};
