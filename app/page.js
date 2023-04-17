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
    <main className=" h-screen">
      {user ? (
        <div className="h-screen flex">
          <p className="text-red-500  overflow-auto ">Welcome {user.email}</p>
        </div>
      ) : (
        // Hero section
        <div
          // page container
          className="flex
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
            {/* ABOUT US */}
            <div className="flex bg-blue-300 h-[300px] my-8 space-x-9 justify-center">
              {/* LEFT */}
              <div className="flex w-[40%] bg-red-300 ">TEXT</div>
              {/* RIGHT */}
              <div className="flex justify-between  w-[40%] bg-red-300">
                IMAGE
              </div>
            </div>
            {/* CONTENT SECTION */}
            <div className="flex bg-blue-300 h-[300px] my-8 space-x-9 justify-center">
              {/* LEFT */}
              <div className="flex w-[40%] bg-red-300 ">IMAGE</div>
              {/* RIGHT */}
              <div className="flex justify-between  w-[40%] bg-red-300">
                TEXT
              </div>
            </div>
            {/* EXTRA INFO */}
            <div className="flex bg-blue-300 h-[300px] my-8 space-x-9 justify-center">
              {/* LEFT */}
              <div className="flex w-[40%] bg-red-300 ">TEXT</div>
              {/* RIGHT */}
              <div className="flex justify-between  w-[40%] bg-red-300">
                IMAGE
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
