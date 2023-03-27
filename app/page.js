// "use client";
import React from "react";
import { auth } from "@/firebase";

export default function Home() {
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

