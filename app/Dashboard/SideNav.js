"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-4 bg-slate-600 w-[150px] hover:w-[220px] transition-all p-2">
      <div className="flex ">
        <span
          className={
            pathname === "/Dashboard"
              ? "bg-[#DBB073] hover:visible w-[10px] h-[2px] mr-2 my-auto"
              : "bg-[#dbb07383] hover:visible w-[10px] h-[2px] mr-2 my-auto"
          }
        ></span>
        <Link
          className="hover:bg-slate-500 transition-all hover:px-3 w-fit rounded-lg"
          href="/Dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex">
        <span
          className={
            pathname === "/Dashboard/Map"
              ? "bg-[#DBB073] hover:visible w-[10px] h-[2px] mr-2 my-auto"
              : "bg-[#dbb07383] hover:visible w-[10px] h-[2px] mr-2 my-auto"
          }
        ></span>
        <Link
          className="hover:bg-slate-500 transition-all hover:px-3 w-fit rounded-lg"
          href="Dashboard/Map"
        >
          Map
        </Link>
      </div>
      <div className="flex">
        <span
          className={
            pathname === "/Dashboard/Portfolio"
              ? "bg-[#DBB073] hover:visible w-[10px] h-[2px] mr-2 my-auto"
              : "bg-[#dbb07383] hover:visible w-[10px] h-[2px] mr-2 my-auto"
          }
        ></span>
        <Link
          className="hover:bg-slate-500 transition-all hover:px-3 w-fit rounded-lg"
          href="Dashboard/Portfolio"
        >
          Portfolio
        </Link>
      </div>
      <div className="flex">
        <span
          className={
            pathname === "/Dashboard/Settings"
              ? "bg-[#DBB073] hover:visible w-[10px] h-[2px] mr-2 my-auto"
              : "bg-[#dbb07383] hover:visible w-[10px] h-[2px] mr-2 my-auto"
          }
        ></span>
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
