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
    var topo = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
    );

    var rgb = L.tileLayer(
      "https://api.ellipsis-drive.com/v3/path/062f687f-30ec-48e0-85c7-be005fe747e2/raster/timestamp/e6388b85-d1bb-402e-9edb-19ee245ea0fe/tile/{z}/{x}/{y}?style=5202daeb%2dec2c%2d4cfb%2d9f0c%2db5fd868730c2&token=epat_S5UmIhfYNXTUbLPYxal5bJeWFKVRNDPuRtVc1VPzoZxLIEuZ9xRnJUBhQBOufw4H",
      {
        attribution:
          'Map data from Escuela de Geografía,UCR; <a href="https://www.geografia.fcs.ucr.ac.cr/index.php/es/">Dr.Pascal Girot Pignot</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 23,
      }
    );

    var marker1 = L.marker([9.889718, -84.037271])
      .addTo(map)
      .bindPopup("Entrada A del parque");
    var marker2 = L.marker([9.889955333454145, -84.03392571430172])
      .addTo(map)
      .bindPopup("Entrada B del parque");

    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }

    map.on("click", onMapClick);

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
      "ESRI Topo": topo,
    };

    var overlays = {
      //add any overlays here
      Raster: rgb,
      Acceso_A: marker1,
      Acceso_B: marker2,
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
