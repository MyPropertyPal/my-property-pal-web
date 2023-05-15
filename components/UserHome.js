import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { properties } from "@/data";

async function fetchPropeties() {
  await fetch("api/").then((res) => {
    console.log(res);
  });
}

fetchPropeties();
function UserHome({ user }) {
  useEffect(() => {
    // console.log("fetching users saved properties");
    // fetch("api/").then((res) => {
    //   console.log(res.text());
    // });
  }, []);

  return (
    <div className=" max-h-screen flex-col space-y-7">
      {/* TOP SECTION */}
      <section className="border w-screen justify-center h-[150px]">
        <p className="text-3xl mx-auto pt-7 font-thin w-fit">
          Welcome {user.email}, to your dashboard.
        </p>
      </section>

      {/* PROPERTIES SECTION */}
      <section className="border w-screen p-7">
        <div className="flex flex-col">
          <h2>Here is your current list of properties:</h2>
          <ul>
            {properties.map((prop, idx) => (
              <li key={idx} className="m-5 p-2 bg-slate-50">
                <div>{prop.address}</div>
                <div>{prop.style}</div>
                <div>${prop.price}</div>
              </li>
            ))}
          </ul>
          <Link href="/Dashboard/Portfolio" className="text-blue-500">
            {" "}
            See all properties
          </Link>

          <Link
            href="/Dashboard/Search"
            className=" flex text-center bg-blue-400 w-[100px] mx-auto rounded-md p-1 mb-3"
          >
            Show on map
          </Link>

          <Link
            href="/Dashboard/Portfolio/Add"
            className=" flex text-center bg-blue-400 w-[100px] mx-auto rounded-md p-1"
          >
            Add Properties
          </Link>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border w-screen h-[300px] flex flex-col">
        <h2>
          Here you can view your current numbers such as mortgages, rents,
          cashflow, COC return
        </h2>
        <div className="pt-8 mx-auto">
          **GRAPH OF INCOME - EXPESNES = CASHFLOW
        </div>
      </section>
    </div>
  );
}

export default UserHome;
