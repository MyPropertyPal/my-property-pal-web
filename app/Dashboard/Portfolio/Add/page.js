"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Dropdown } from "@nextui-org/react";
import { states } from "@/data";

//made this a capital "P" to make it a react fn component to use "useState"
function Page() {
  const [state, setState] = useState("Select");
  const addProperty = (e) => {
    e.preventDefault();
    console.log(e.target.streetAddress.value);
    // console.log(state);
  };

  const menuItems = [
    { key: "NC", name: "North Carolina" },
    { key: "SC", name: "South Carolina" },
  ];

  // const selectedValue = =useMemo(
  //   () => Array.from(selected).join(", ").replaceAll("_", " "),
  //   [selected]
  // );

  return (
    // PAGE CONTAINER
    <div className="h-screen w-screen bg-slate-300">
      {/* ADD PROP FORM */}
      <form
        className="bg-orange-300 flex-col w-[75%]  h-[80%] mx-auto my-5 p-5"
        onSubmit={addProperty}
      >
        <h1 className="flex justify-center text-4xl font-thin">
          Fill out the form to add a Porperty
        </h1>
        {/* FORM LABELS */}
        <section className="flex-col p-10">
          {/* STREET ADDRESS */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="streetAddress"
          >
            Street Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="streetAddress"
            type="text"
            placeholder="123 Main St"
          />
          {/* CITY */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="city"
          >
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Wilmington"
          />
          {/* STATE  ============================== */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="state"
          >
            State
          </label>
          <Dropdown>
            <Dropdown.Button solid className="bg-blue-500">
              {state}
            </Dropdown.Button>

            <Dropdown.Menu
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={state}
              onSelectionChange={setState}
              items={states}
            >
              {(state) => (
                <Dropdown.Item
                  key={state.key}
                  onSelectionChange={console.log(state)}
                  withDivider
                >
                  {state.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          {/* ZIP ============================ */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="zipcode"
          >
            Zip
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="zipcode"
            type="text"
            placeholder="#####"
          />
          {/* COUNTRY ============================= */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="country"
          >
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            placeholder="United States"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="propType"
          >
            Property Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="propType"
            type="text"
            placeholder=""
          />
        </section>
        {/* BUTTONS */}
        <section className="flex space-x-6 mx-auto w-fit">
          <button className=" bg-blue-500 rounded-lg" type="submit">
            <p className="flex p-5">add</p>
          </button>
          <button className=" bg-blue-500 rounded-lg">
            <Link href="/Dashboard/Portfolio" className=" flex p-5">
              Cancel
            </Link>
          </button>
        </section>
      </form>
    </div>
  );
}

export default Page;
