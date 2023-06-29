"use client";
import React, { useEffect, useState } from "react";
import Property from "@/components/Property";
import Link from "next/link";

import fetchProperties from "@/app/utils/fetchProperties";
import { useAuthContext } from "@/app/context/AuthContext";

function Page() {
  const { user } = useAuthContext();
  const [properties, setProperties] = useState([]);

  const deleteProp = () => {
    alert('Property deleted')
  };
  /**
   * GET PROPERTIES FROM USER
   */
  useEffect(() => {
    fetchProperties(user, setProperties);
  }, []);

  return (
    // PAGE CONTAINER
    <div className="flex flex-col h-screen w-screen">
      {/* HEADER */}
      <div className="flex">
        <h1
          className="text-5xl justify-center pt-4 h-fit mx-auto"
          // onClick={addProperties()}
        >
          Portfolio
        </h1>
        <button className="bg-blue-400 w-[100px] mx-auto rounded-md p-1">
          <Link href="/Dashboard/Portfolio/Add">Add Properties</Link>
        </button>
      </div>
      <h2 className="p-5 text-2xl">List of current properties: </h2>

      <ul>
        {properties.map((prop, idx) => (
          <li key={idx} className="p-2 m-5 bg-slate-50">
            {/* Make this a property li component? */}
            <Property prop={prop}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
