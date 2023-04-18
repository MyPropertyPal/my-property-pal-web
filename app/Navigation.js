"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import app from "./firebase/config";
import { useAuthContext } from "./context/AuthContext";
import logo from "../components/imgs/logo.png";

const auth = getAuth(app);

function Header() {
  const { user } = useAuthContext();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // alert("Signed out");
      return router.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  /**
   * 2 nav bar layouts
   * 1st: hero section for users who are not loggeg in
   * 2nd: for users who are logged in
   */

  return (
    <header className=" flex h-[80px]">
      {!user ? (
        /**
         * Not logged in
         */
        <>
          <div className=" flex flex-1 ml-10 my-auto cursor-pointer">
            <Link href="/">
              <Image
                src={logo}
                alt="Company Logo"
                width={80}
                height={80}
                className="rounded-xl pt-3 ml-4"
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
          <p className="flex flex-1 ml-10 my-auto cursor-pointer">*logo*</p>

          <ul className="flex mr-8 my-auto space-x-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <div onClick={handleSignOut}>Sign Out</div>
            </li>
          </ul>
        </>
      )}
    </header>
  );
}

export default Header;
