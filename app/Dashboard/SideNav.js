import React from "react";
import Link from "next/link";
function SideNav() {
  return (
    <div className="flex flex-col space-y-4 bg-slate-600 w-[80px] hover:w-[200px] transition-all p-2">
      <Link href="/">Home</Link>
      <Link href="Dashboard/Search">Search</Link>
      <Link href="Dashboard/Settings">Settings</Link>
    </div>
  );
}

export default SideNav;
