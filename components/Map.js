"use client";
import React, { useEffect, useRef } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// if (!isLoaded) return <div>Loading...</div>;
export default function MapBox() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-81.187302, 35.262081],
      zoom: 14,
    });
  }, []);

  return (
    <div
      className="map-container h-screen"
      ref={mapContainer}
      // style={{ width: 400, height: 600 }}
    >
      map
    </div>
  );
}
