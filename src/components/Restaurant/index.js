import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import BackButton from "./BackButton";
import "./Restaurant.scss";

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

const Restaurant = ({ restaurants }) => {
  let { name } = useParams();

  if (restaurants.length === 0) {
    return <>Please return to Home page...</>;
  }

  const restaurant = restaurants.filter((item) => item.name === name)[0];

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
    <>
      <BackButton />
      <div className="RestaurantCard">
        <img src={restaurant.photos[0].links[1]} alt="restaurant" />
        <div className="textbox">
          <h2>
            {restaurant.name} •{" "}
            <span>{"$".repeat(restaurant.price_level)}</span>
          </h2>
          <p className="rating">
            {restaurant.rating} <span>({restaurant.user_ratings_total})</span>
          </p>
          <p className="address">{restaurant.formatted_address}</p>
          <p style={{ textTransform: "capitalize" }}>
            Cuisine: {restaurant.cuisine},{" "}
            <span>({restaurant.dietaryRestrictions} is available)</span>
          </p>
          <p className="openTime">
            Open from {restaurant.opening_hours.hours.open} to{" "}
            {restaurant.opening_hours.hours.close}
          </p>
          <p className="contactForm">
            <span>
              {restaurant.social.phone}, {restaurant.social.email}
            </span>
          </p>
          <div className="map-wrapper">
            <div id="map" className="map"></div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapReduxStateToProps(reduxState) {
  return { restaurants: reduxState.restaurants };
}

export default connect(mapReduxStateToProps)(Restaurant);
