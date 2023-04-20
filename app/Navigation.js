"use client";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import app from "./firebase/config";
import { useAuthContext } from "./context/AuthContext";
import logo from "../components/imgs/logo.png";
import UserLogo from "@/components/UserLogo";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "./firebase/config";
const auth = getAuth(app);

function Header() {
  const { user } = useAuthContext();
  const collectionRef = collection(db, 'users')
  console.log(collectionRef)
  console.log(user)
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



 



  return (
    <header className=" flex h-[80px]">
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
                className="rounded-xl pt-3 "
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
            <li className="my-auto">
              <Link href="/">Home</Link>
            </li>
            <li className="my-auto">
              <Link href="/Dashboard">Dashboard</Link>
            </li>
            <li className="flex">
              <UserLogo />
              <div onClick={handleSignOut} >Sign Out</div>
            </li>
          </ul>
        </>
      )}
    </header>
  );
}

export default Header;
