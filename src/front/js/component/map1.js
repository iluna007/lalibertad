import React, { useEffect } from "react";

const Map_1 = () => {
  useEffect(() => {
    // Inicializar el mapa y establecer la vista inicial
    var map = L.map("map").setView([9.890430504934573, -84.03438748126763], 16);

    var basemap = L.tileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 22,
      }
    );

    var esri = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    );

    var rgb = L.tileLayer(
      "https://api.ellipsis-drive.com/v3/path/e46e4267-b95b-427b-bac0-b76afd727de4/raster/timestamp/0351670b-7e4d-4c7f-a6a8-488993bc7287/tile/{z}/{x}/{y}?style=7683c9d9%2d2dfc%2d4ac2%2d8dd0%2db9ee2018cea3&token=epat_R2r4Va1kMPQXhrddgnckqnfkaWZDzsxarl8vPVwYmfuSFpLn6AkuTu2y9bLJsqoa",
      {
        attribution:
          'Map data from Escuela de Geografía,UCR; <a href="https://www.geografia.fcs.ucr.ac.cr/index.php/es/">Dr.Pascal Girot Pignot</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 23,
      }
    );
    

    basemap.addTo(map);
    rgb.addTo(map);

    var basemap2 = L.tileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 22,
      }
    );

    //var layerControl = L.control.layers(basemap,rgb,cir,thermal).addTo(map);
    var baselayers = {
      "OSM basemap": basemap,
      "ESRI Imagery": esri,
    };

    var overlays = {
      //add any overlays here
      Raster: rgb,
      // 'CIR': cir,
      // 'Thermal': thermal
    };

    L.control.layers(baselayers, overlays, { position: "topright" }).addTo(map);

    //var miniMap = new L.Control.MiniMap(basemap2).addTo(map);
    //var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default Map_1;
