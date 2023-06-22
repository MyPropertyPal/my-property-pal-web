import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

import Link from "next/link";
import { properties } from "@/data";
import { db } from "@/app/firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

function UserHome({ user }) {
  const [properties, setProperties] = useState([]);
  // const collectionRef = collection(db, "properties")
  // const docSnap = (async ()=> await getDocs(collectionRef))()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subCollectionRef = collection(
          db,
          `users/${user.email}/properties`
        );

        const querySnapshot = await getDocs(subCollectionRef);
        const userProperties = [];

        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          // Perform operations with the documents here
          userProperties.push(doc.data());
        });
        setProperties(userProperties);
        console.log(userProperties);
      } catch (error) {
        console.log("Error getting subcollection documents: ", error);
      }
    };

    console.log(properties, "========");
    fetchData();
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
                <div>{prop.type}</div>
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
