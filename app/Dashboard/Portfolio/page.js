import React from "react";
import { properties } from "@/data";

function page() {
  return (
    // PAGE CONTAINER
    <div className="flex flex-col h-screen w-screen">
      {/* HEADER */}
      <div className="flex">
        <h1 className="text-5xl justify-center pt-4 h-fit mx-auto">
          Portfolio
        </h1>
        <button
          className="bg-blue-400 w-[100px] mx-auto rounded-md p-1"
          // onClick={() => {
          //   alert("**opens up add property form**");
          // }}
        >
          add properties
        </button>
      </div>
      <h2 className="p-5 text-2xl">List of current properties: </h2>

      <ul>
        {properties.map((prop, idx) => (
          <li key={idx} className="p-2 m-5 bg-slate-50">
            <div>{prop.address}</div>
            <div>{prop.style}</div>
            <div>${prop.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
