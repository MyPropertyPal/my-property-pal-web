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
           h-screen
           flex-col
          "
          >
            {/* title */}
            <p className=" h-30 md:h-10 mx-auto my-10  font-bold text-4xl justify-center text-center">
              Real estate CRM for{" "}
              <span className="underline decoration-blue-400 decoration-4 decoration">
                nomadic
              </span>{" "}
              real estate investors
            </p>
            {/* FIRST SECTION */}
            <div className="flex flex-col h-[200px]  justify-left text-center text  justify-around ">
              {/* TOP */}
              <p className="w-[80%] m-auto">
                Built by a real estate investor, for real estate investors of
                all sizes. My Property Pal is a cutting edge real estate
                management stystem designed to help you live a nomadic lifestyle
                abroad. All while maintaining and scaling your business to fit
                your lifestyle. Our technologies makes living your best life
                abroad easy.
              </p>
              <div className="flex  justify-center self-center mt-5">
                <Link
                  href="/Signup"
                  className=" text-center flex rounded-lg  h-10 w-[100px] bg-blue-400 m-auto"
                >
                  <p className="flex m-auto ">Sign up</p>
                </Link>
              </div>
            </div>
            {/* middle seciont w/ background */}
            <div className="h-full  z-10 relative mt-10 ">
              {/* blue bg */}
              <div className="absolute h-full w-[100%] top-20 md:top-20 z-0 bg-blue-400 rounded-t-[20%] md:rounded-t-[40%]"></div>
              {/* black box */}
              <div
                className=" relative w-[70%] md:w-[50%] h-[300px] md:h-[400px] z-10 m-auto bg-slate-900 border-[#D39852]
               border-[3px] rounded-3xl mt-5"
              >
                <p className="text-white text-center pt-8 text-3xl">
                  *Map Info*
                </p>
              </div>
            </div>
            {/* BOTTOM */}
            {/* Background */}
          </div>
        </div>
      )}
    </main>
  );
}
