"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import app from "./firebase/config";
import { useAuthContext } from "./context/AuthContext";

const auth = getAuth(app);

function Header() {
  const { user } = useAuthContext();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      auth.signOut();
      alert("Signed out");
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
    <header className="bg-blue-500 flex h-[80px]">
      {!user ? (
        /**
         * Not logged in
         */
        <>
          <p className=" flex flex-1 ml-10 my-auto">*logo*</p>
          {/* right side */}

          <ul className="flex flex-2  space-x-8 my-auto mr-8">
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
          <p className=" flex flex-1 ml-10 my-auto">*logo*</p>
          <p className="mr-8 my-auto">Welcome, {user.email}</p>
          <ul>
            <li>
              <Link href="/Dashboard">Dashboard</Link>
            </li>
          </ul>
          <div onClick={handleSignOut} className="mr-8 my-auto">
            Sign Out
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
