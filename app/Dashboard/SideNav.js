import React from "react";
import Link from "next/link";
function SideNav() {
  return (
    <div className="flex flex-col space-y-4 bg-slate-600 w-[250px] p-2">
      <Link href="Dashboard/Settings">Settings</Link>
      <Link href="Dashboard/Search">Search</Link>
    </div>
  );
}

export default SideNav;
