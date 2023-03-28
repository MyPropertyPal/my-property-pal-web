"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import app from "./firebase/config";

const auth = getAuth(app)


function Header() {
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
  return (
    <header className="bg-blue-500 flex space-x-10 h-[100px] justify-center align-">
      <p>*Navigation Bar*</p>
      <ul className="flex space-x-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
        <li>
          <div onClick={handleSignOut}>Sign Out</div>
        </li>
      </ul>
      {/* add some links */}
    </header>
  );
}

export default Header;
