"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const properties = [
  {
    address: "123 stealth st.",
    lat: 34.232276,
    lng: -77.946817,
    purchasePrice: 680000,
  },
  {
    address: "123 main st.",
    lat: 34.230178,
    lng: -77.942374,
    purchasePrice: 400000,
  },
  {
    address: "123 todd st.",
    lat: 34.222915,
    lng: -77.939688,
    purchasePrice: 734000,
  },
];

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

// if (!isLoaded) return <div>Loading...</div>;
export default function MapBox() {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  console.log(lat, lng, "------");

  async function getData() {
    const data = await response.text();
    console.log("===", response); // "Hello, Next.js!"
  }

  useEffect(() => {
    // get the location on  load
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // setCoordinates([longitude, latitude]);
        setLat(latitude);
        setLng(longitude);
      }
    );
  }, [lat, lng]);

  if (!lat || !lng) {
    return <div>Getting your location. Please wait.</div>;
  }

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
      style={{
        width: "700px",
        height: "700px",
      }}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 11,
        projection: "globe",
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      logoPosition="top-right"
      fog={true}
    >
      <Layer {...waterLayer} />

      {/* Add markers */}
      <Marker
        longitude={lng}
        latitude={lat}
        anchor="bottom"
        color="red"
      ></Marker>
      {properties.map((prop, index) => (
        <Marker
          key={index}
          longitude={prop.lng}
          latitude={prop.lat}
          anchor="bottom"
        />
      ))}
    </Map>
  );
}

//  <div
// className="map-container h-screen"
// ref={mapContainer}
// id="map"
// // style={{ width: 400, height: 600 }}
// >

// </div>
