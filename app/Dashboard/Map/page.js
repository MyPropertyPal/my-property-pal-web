"use client";
import React from "react";

import Map from "@/components/Map";

function PropertyMap() {
  return (
    <div className="flex flex-col h-screen bg-gray-500  w-[100%] p-8 overflow-hidden">
      <>
        {/* <div>Search for new properties using the map</div> */}

        <Map />
      </>
    </div>
  );
}

export default PropertyMap;
