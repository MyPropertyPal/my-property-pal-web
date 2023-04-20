"use client";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import getDoument from "../firebase/firestore/getData";
function Page() {
  const { user } = useAuthContext();
  const [data, setData] = useState(null);
  console.log(data);

  const router = useRouter();
  // console.log(data)
  useEffect(() => {
    //protects the route
    if (user == null) router.push("/");
    else {
      // call the async function inside the effect and update the state with the fetched data
      getDoument("users", user.email).then((res) => {
        if (res.result) {
          setData(res.result.data());
        } else {
          console.log(res.error);
        }
      });
    }
  }, [user]);

  return (
    <>
      {data ? (
        <div className="flex-col p-5 h-screen">
          <h1 className="text-2xl">
            Welcome to the Dashboard {data.firstName}
          </h1>
          <ul className="text-xl space-y-3">
            <div className="underline">To Do</div>
            <li className="list-decimal ml-8">
              Work on loading screen for dashboard | The dashboard should show
              your current properties and their respective numbers, like a
              portfolio overview
            </li>
            <li className="list-decimal ml-8">Work on color palette</li>
            <li className="list-decimal ml-8">Research Mapbox api </li>
            <li className="list-decimal ml-8">
              Add map (search tab) feature and show properites in the area for
              sale
            </li>
            <li className="list-decimal ml-8">Make a add property button somewhere that adds a property colection to the firestore db with address.</li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Page;
