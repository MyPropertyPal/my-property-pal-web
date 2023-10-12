"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { useAuthContext } from "@/app/context/AuthContext";
import "mapbox-gl/dist/mapbox-gl.css";
import fetchProperties from "@/app/utils/fetchProperties";

/**
 * See api/dashboard/index for fake data
 */

/**
 * FOG
 */

const fog = {
  range: [0.8, 8],
  color: "white",
  "horizon-blend": 0.5,
  "high-color": "#245bde",
  "space-color": "#000000",
  "star-intensity": 0.5,
};

/**
 * LAYERS
 */
// Not in use
const waterLayer = {
  id: "water",
  type: "fill",
  source: {
    type: "vector",
    url: "mapbox://mapbox.mapbox-streets-v8",
  },
  "source-layer": "water",
  paint: {
    "fill-color": "#4E3FC8",
  },
};

/**
 * LOADING
 */

// if (!isLoaded) return <div>Loading...</div>;
export default function MapBox() {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [properties, setProperties] = useState();
  const mapRef = useRef(null);

  const { user } = useAuthContext();

  async function getData() {
    const propData = await fetchProperties(user, setProperties);
    // setProperties(propData)
    console.log("Properties:", propData);
  }

  /**
   * MAP ONLOAD
   */
  const mapLoaded = (map) => {
    // this funtion will execute when the map loads
    // console.log(mapRef);
  };

  useEffect(() => {
    // get the location on load
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLat(latitude);
        setLng(longitude);
      }
      // after lat and lng set... call RE api to get data with it
    );
    getData();
  }, []);

  if (!lat || !lng & properties) {
    return <div>Loading map data</div>;
  }

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
      style={{
        width: "100%",
        height: "600px",
        border: "1px solid red",
      }}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 11,
        projection: "globe",
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      logoPosition="top-right"
      fog={fog}
      ref={mapRef}
      onLoad={mapLoaded(mapRef)}
    >
      {/* <Layer {...waterLayer} /> */}

      {/* Add markers */}
      {/* The users location */}
      <Marker
        longitude={lng}
        latitude={lat}
        anchor="bottom"
        color="red"
        // draggable={true}
        onClick={(e) => {
          alert(lng + " " + lat);
        }}
        rotation={20}
      ></Marker>
      {/* Location of property data */}
      {properties.map((prop, index) => {
        {
          const address = `${prop.streetAddress} ${prop.city} ${prop.state}`;
          return (
            // console.log(prop)
            <Marker
              key={index}
              longitude={prop.coords.lng}
              latitude={prop.coords.lat}
              onClick={(e) => {
                alert(address);
              }}
              color={prop.color}
            />
          );
        }
      })}
    </Map>
  );
}
