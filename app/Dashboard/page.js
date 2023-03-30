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
        <>
          <h1 className="text-2xl">Welcome to the Dashboard {data.firstName}</h1>
          <ul className="text-xl">
            <div className="underline">To Do</div>
            <li>
              switch around database so we can look them up with their email as
              the id. We can query the user data from the firestore using their
              email as the lookup.
            </li>
            <li>Your email is {user.email}</li>
          </ul>
        </>
      ) : null}
    </>
  );
}

export default Page;
