"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
      className="overflow-hidden"
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 11,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      <Marker longitude={lng} latitude={lat} anchor="bottom"></Marker>
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
