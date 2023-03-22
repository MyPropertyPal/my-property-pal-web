import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-blue-500 flex flex-col w-[150px]">
      <p>Navigation</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
      </ul>
      {/* add some links */}
    </header>
  );
}

export default Header;
