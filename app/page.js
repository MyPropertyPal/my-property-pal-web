"use client";
import React from "react";
import Link from "next/link";
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
            <p className=" h-30 md:h-10 mx-auto my-10  font-bold text-4xl justify-center text-center">
              Real estate CRM for
              <span className="underline decoration-blue-400 decoration-4 decoration">
                nomadic
              </span>{" "}
              real estate investors
            </p>
            {/* FIRST SECTION */}
            <div className="flex flex-col h-[200px]  justify-left text-center text  justify-around">
              {/* TOP */}
              <p className="font-semibold">
                Built by a real estate investor, for real estate investors of
                all sizes. My Property Pal is a cutting edge real estate
                management stystem designed to help you live a nomadic lifestyle
                abroad. All while maintaining and scaling your business to fit
                your lifestyle.
              </p>

              {/* BOTTOM */}
              <div className="flex  bg-slate-400 justify-center self-center ">
                <Link
                  href="/Signup"
                  className=" text-center flex rounded-lg  h-10 w-[100px] bg-blue-400 m-auto  py-auto mb-10"
                >
                  <p className="flex m-auto ">Sign up</p>
                </Link>
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
