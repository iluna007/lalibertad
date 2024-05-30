import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-control-minimap';

const MiniMapComponent = () => {
    useEffect(() => {
        var map = L.map('map').setView([0, 0], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var miniMap = new L.Control.MiniMap(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')).addTo(map);

        return () => {
            miniMap.remove();
        };
    }, []);

    return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MiniMapComponent;