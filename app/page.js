"use client";
import React from "react";

import { useAuthContext } from "./context/AuthContext";
import GuestHome from "@/components/GuestHome";
import UserHome from "@/components/UserHome";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <main className=" h-screen">
      {user ? (
       <UserHome user={user}/>
      ) : (
      <>
      <GuestHome />
      </>
      )}
    </main>
  );
}
