"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import getDoument from "../firebase/firestore/getData";
function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  console.log(user, "pppppppppp");
  useEffect(() => {
    //protects the route
    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <h1 className="text-2xl">Welcome to the Dashboard! </h1>
      <ul className="text-xl">
        <div className="underline">To Do</div>
        <li>
          switch around database so we can look them up with their email as the
          id. We can query the user data from the firestore using their email as
          the lookup.
        </li>
        <li></li>
      </ul>
    </>
  );
}

export default Page;
