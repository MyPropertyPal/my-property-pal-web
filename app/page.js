"use client";
import React from "react";
import { auth } from "@/app/firebase/config";
import app from "@/app/firebase/config";
import { getAuth } from "firebase/auth";
import { useAuthContext } from "./context/AuthContext";
export default function Home() {
  const {user} = useAuthContext()
  // const auth = getAuth(app);
  // const user = auth.currentUser;
  return (
    <main>
      {user ? (
        <div className="h-screen bg-slate-600">
          <p className="text-red-500 h-screen  overflow-auto ">
            Welcome {user.email}
          </p>
        </div>
      ) : (
        // Hero
        <p>You are not signed in</p>
      )}
    </main>
  );
}
