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
        <div className="flex-col p-5">
          <h1 className="text-2xl">
            Welcome to the Dashboard {data.firstName}
          </h1>
          <ul className="text-xl space-y-3">
            <div className="underline">To Do</div>
            <li className="list-decimal ml-8">
              Make loading screen for dashboard
            </li>
            <li className="list-decimal ml-8">
              Work on making elements responsive to screen size
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Page;
