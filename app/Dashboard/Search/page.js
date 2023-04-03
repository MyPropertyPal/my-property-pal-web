"use client";
import React from "react";
import { GoogleMap, useLoadScript, Marker,useJsApiLoader } from "@react-google-maps/api";

import Map from "../../../components/Map";

function Search() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  });

  // if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="flex flex-col h-screen bg-green-500 w-[100%] p-8">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>Search for new properties using the map</div>
          {/* <GoogleMap
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            style={{ height: "100%", width: "100%" }}
          ></GoogleMap> */}
          <Map />
        </>
      )}
    </div>
  );
}

export default Search;
