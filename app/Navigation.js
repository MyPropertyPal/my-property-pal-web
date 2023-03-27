import React from "react";
import Link from "next/link";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
function Header() {
  // const handleSignOut = () => {
  //   auth.signOut();
  //   navigate("/");
  // };
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
          <a href="">Sign Out</a>
        </li>
      </ul>
      {/* add some links */}
    </header>
  );
}

export default Header;
