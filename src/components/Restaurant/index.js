import React from "react";

import "./Restaurant.scss";
import { useParams } from "react-router-dom";

// Imports from Open Layers, in order to display map
// import Map from "ol/Map";
// import View from "ol/View";
import { Tile, Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import { Vector as VectorSource } from "ol/source";
import { Feature } from "ol";
import { Point } from "ol/geom";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const Restaurant = ({ rests }) => {
  let { name } = useParams();
  const rest = rests.filter((item) => item.name === name)[0];

  // Creating a map instance,
  // and a layer of the map with a blue pin of the restaurant location, in the middle
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: new View({
      center: fromLonLat([
        rest.geometry.location.lng,
        rest.geometry.location.lat,
      ]),
      zoom: 18,
    }),
  });

  const layer = new VectorLayer({
    source: new VectorSource({
      features: [
        new Feature({
          geometry: new Point(
            fromLonLat([rest.geometry.location.lng, rest.geometry.location.lat])
          ),
          // color: "red",
        }),
      ],
    }),
  });
  map.addLayer(layer);

  return (
    <main>
      <div className="card">
        <div className="textbox">
          <img src={rest.photos[0].links[1]} alt="restaurant" />
          <h2>{rest.name}</h2>
          <p>{rest.formatted_address}</p>
          <p>{rest.social.phone}</p>
          <p>{rest.social.email}</p>
          <p>
            Open from {rest.opening_hours.hours.open} to{" "}
            {rest.opening_hours.hours.open}
          </p>
          <p>Rating: {rest.rating}</p>
          <p style={{ textTransform: "capitalize" }}>
            Food: {rest.cuisine}, {rest.dietaryRestrictions}
          </p>
          <div className="map-wrapper">
            <div id="map" className="map"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Restaurant;
