"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import app from "./firebase/config";

const auth = getAuth(app);

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
    <header className="bg-blue-500 flex h-[100px]">
      {/* left side */}
      <p className=" flex flex-1 ml-10 mt-8">*logo*</p>
      {/* right side */}
      <ul className="flex flex-2  space-x-8 my-8 mr-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
        <li>
          {/* make pointer/ or a link?? */}
          <div onClick={handleSignOut}>Sign Out</div>
        </li>
      </ul>
      {/* add some links */}
    </header>
  );
}

export default Header;
