import React from "react";
import Link from "next/link";
function SideNav() {
  return (
    <div className="flex flex-col space-y-4 bg-slate-600 w-[100px] hover:w-[220px] transition-all p-2">
      <div className="flex ">
        <span className="bg-[#DBB073]  hover:visible w-[10px] h-[2px] mr-2 my-auto"></span>
        <Link
          className="hover:bg-slate-500 transition-all hover:px-3 w-fit rounded-lg"
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="flex">
        <span className="bg-[#DBB073]  hover:visible w-[10px] h-[2px] mr-2 my-auto"></span>
        <Link
          className="hover:bg-slate-500 transition-all hover:px-3 w-fit rounded-lg"
          href="Dashboard/Search"
        >
          Search
        </Link>
      </div>
      <div className="flex">
        <span className="bg-[#DBB073]  hover:visible w-[10px] h-[2px] mr-2 my-auto"></span>
        <Link
          className="hover:bg-slate-500 transition-all hover:px-3 w-fit rounded-lg"
          href="Dashboard/Settings"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
