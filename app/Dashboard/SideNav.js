import React from "react";
import Link from "next/link";
function SideNav() {
  return (
    <div className="h-screen bg-slate-600 max-w-[200px] p-2">
      <Link href="Dashboard/Settings">settings</Link>
    </div>
  );
}

export default SideNav;
