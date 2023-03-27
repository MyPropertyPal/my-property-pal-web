// "use client";
import React from "react";
import { auth } from "@/app/firebase/config";
import app from "@/app/firebase/config";
import { getAuth } from "firebase/auth";
export default function Home() {

  const auth = getAuth(app);
  const user = auth.currentUser;
  return (
    <main>
      {user ? (
        <div className="h-screen bg-slate-600">
          <p className="text-red-500 h-screen  overflow-auto ">
            Welcome {user.email}
          </p>
        </div>
      ) : (
        <p>You are not signed in</p>
      )}
    </main>
  );
}
