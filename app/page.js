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
    <main className="bg-[#F9F2ED]">
      {user ? (
        <div className="h-screen flex">
          <p className="text-red-500  overflow-auto ">Welcome {user.email}</p>
        </div>
      ) : (
        // Hero section
        <div
          // page container
          className="flex  h-screen
        "
        >
          <div
            // content container
            className="
           mx-auto w-[90%]
          "
          >
            {/* title */}
            <p className="flex  h-10 mx-auto my-10 text-xl font-thin justify-center">
              Welcome to My Property Pal!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
