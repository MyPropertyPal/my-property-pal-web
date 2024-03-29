"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import app from "./firebase/config";
import { useAuthContext } from "./context/AuthContext";
import logo from "../components/imgs/logo.png";
import UserLogo from "@/components/UserLogo";
import getUser from "./firebase/firestore/getData";
import { usePathname } from "next/navigation";

import { db } from "./firebase/config";
const auth = getAuth(app);

function Header() {
  // state management
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  //pathname
  const pathname = usePathname();
  const isDashboardPath = pathname.includes("/Dashboard");
  // console.log("isDashboardPath", isDashboardPath, pathname);

  // fn redeclarations
  const { user } = useAuthContext();

  // call firebase helper fn
  const getUserInfo = async () => {
    if (user) {
      const docSnap = await getUser("users", user.email);
      setFirstName(docSnap.firstName);
      setLastName(docSnap.lastName);
      // console.log(docSnap);
    }
  };

  useEffect(() => {
    // get user data once on page load
    getUserInfo();
  }, []);

  return (
    <header className=" flex h-[90px]">
      {!user ? (
        /**
         * Not logged in
         */
        <>
          <div className=" flex flex-1 ml-5 md:ml-10 my-auto cursor-pointer">
            <Link href="/">
              <Image
                src={logo}
                alt="Company Logo"
                width={80}
                height={80}
                className="rounded-xl  "
              />
            </Link>
          </div>
          {/* right side */}

          <ul className="flex flex-2  space-x-8 my-auto mr-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Login">Login</Link>
            </li>
          </ul>
        </>
      ) : (
        /**
         * Logged in
         */
        <>
          <div className=" flex flex-1 ml-5 md:ml-10 my-auto cursor-pointer">
            <Link href="/">
              <Image
                src={logo}
                alt="Company Logo"
                width={80}
                height={80}
                className="rounded-xl  "
              />
            </Link>
          </div>

          <ul className="flex mr-8 my-auto space-x-5">
            <li
              className={
                pathname === "/"
                  ? "my-auto hover:-translate-y-1 decoration-2  transition-transform duration-200 bg-blue-400 p-1.5 rounded-xl"
                  : "my-auto hover:-translate-y-1 decoration-2  transition-transform duration-200"
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                isDashboardPath
                  ? "my-auto hover:-translate-y-1 decoration-2  transition-transform duration-200 bg-blue-400 p-1.5 rounded-xl"
                  : "my-auto hover:-translate-y-1 decoration-2  transition-transform duration-200"
              }
            >
              <Link href="/Dashboard">Dashboard</Link>
            </li>
            <li className="flex">
              <UserLogo />
            </li>
          </ul>
        </>
      )}
    </header>
  );
}

export default Header;
