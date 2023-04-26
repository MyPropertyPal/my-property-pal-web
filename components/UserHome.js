import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import Link from "next/link";

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
            <li>Prop1</li>
            <li>Prop2</li>
            <li>Prop3</li>
            <li>Prop4</li>
            <li>Prop5</li>
          </ul>
          <a
            href=""
            onClick={() =>
              alert("***link to a page that shows all properties***")
            }
            className="text-blue-500"
          >
            {" "}
            See all properties
          </a>
          <button className="bg-blue-400 w-[100px] mx-auto rounded-md p-1 m-5">
            <Link href="/Dashboard/Search">Show on map</Link>
          </button>
          <button className="bg-blue-400 w-[100px] mx-auto rounded-md p-1">
            add properties
          </button>
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
