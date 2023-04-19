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
              <p>
                Built by a real estate investor, for real estate investors of
                all sizes. My Property Pal is a cutting edge real estate
                management stystem designed to help you live a nomadic lifestyle
                abroad. All while maintaining and scaling your business to fit
                your lifestyle. Our technologies makes living your best life
                abroad easy.
              </p>

              {/* BOTTOM */}
              <div className="flex  justify-center self-center ">
                <Link
                  href="/Signup"
                  className=" text-center flex rounded-lg  h-10 w-[100px] bg-blue-400 m-auto"
                >
                  <p className="flex m-auto ">Sign up</p>
                </Link>
              </div>
            </div>
            {/* Background */}
          </div>
          <div className="absolute h-[60%] w-[100%] top-2/4 bg-blue-500 m-10"></div>
        </div>
      )}

    </main>
  );
}
