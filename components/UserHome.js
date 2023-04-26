import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";

async function fetchPropeties() {
  await fetch("api/").then((res) => {
    console.log(res);
  });
}

fetchPropeties();
function UserHome({ user }) {
  useEffect(() => {
    // console.log("fetching users saved properties");
    // fetch("api/").then((res) => {
    //   console.log(res.text());
    // });
  }, []);

  return (
    <div className="h-screen flex">
      <p className="text-red-500  overflow-auto ">
        Welcome {user.email}, to your dashboard.
      </p>
    </div>
  );
}

export default UserHome;
