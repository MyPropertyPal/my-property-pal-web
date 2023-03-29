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
    // not logged in
    <header className="bg-blue-500 flex h-[100px]">
      {!user ? (
        <>
          <p className=" flex flex-1 ml-10 mt-8">*logo*</p>
          {/* right side */}

          <ul className="flex flex-2  space-x-8 my-8 mr-8">
            <li>
              <Link href="/">Home</Link>{" "}
            </li>
            <li>
              <Link href="/Login">Login</Link>{" "}
            </li>
          </ul>
        </>
      ) : (
        <div onClick={handleSignOut}>Sign Out</div>
      )}
    </header>
  );
}

export default Header;

