"use client";
import React from "react";

import Map from "@/components/Map";

function Search() {

  return (
    <div className="flex flex-col h-screen bg-green-500 w-[100%] p-8">
      <>
        <div>Search for new properties using the map</div>

        <Map />
      </>
    </div>
  );
}

export default Search;
