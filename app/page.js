"use client";
import React from "react";
import { auth } from "@/app/firebase/config";
import app from "@/app/firebase/config";
import { getAuth } from "firebase/auth";
import { useAuthContext } from "./context/AuthContext";
export default function Home() {
  const { user } = useAuthContext();
  // const auth = getAuth(app);
  // const user = auth.currentUser;
  return (
    <main>
      {user ? (
        <div className="h-screen flex">
          <p className="text-red-500  overflow-auto ">Welcome {user.email}</p>
        </div>
      ) : (
        // Hero
        <div
          className="flex  h-screen bg-slate-600 mx-20
        "
        >
          <p className="flex  h-10 mx-auto my-10 text-xl bg-slate-300 font-lato ">
            Welcome to My Property Pal!
          </p>
        </div>
      )}
    </main>
  );
}
