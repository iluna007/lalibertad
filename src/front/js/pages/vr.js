import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VR = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5"style={{height: '100vh'}}>
      <h1></h1>
      <iframe class="atis-cloud-iframe" src="https://webapp.atis.cloud/prism/share/TditDUlSAQIEfdJEroQPnUtNACe68qZQg1OO6Y5LTiKMJxTgaM?menu=true&tools=true&map=true&autoload=false" width="100%" height="100%"></iframe>
    </div>
  );
};
