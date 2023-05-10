import React from "react";
import Link from "next/link";

function page() {
  const addProperty = (e) => {
    e.preventDefault();
    console.log("property added to db");
  };
  return (
    // PAGE CONTAINER
    <div className="h-screen w-screen bg-slate-300">
      {/* ADD PROP FORM */}
      <form
        className="bg-orange-300 flex-col w-[75%]  h-[80%] mx-auto my-5"
        onSubmit={addProperty}
      >
        <h1 className="flex justify-center text-4xl font-thin">
          Fill out the form to add a Porperty
        </h1>
        {/* BUTTONS */}
        <section className="flex space-x-6 mx-auto w-fit">
          <button className=" bg-blue-500 rounded-lg" type="submit">
            <p className="flex p-5">add</p>
          </button>
          <button className=" bg-blue-500 rounded-lg">
            <Link href="/Dashboard/Portfolio" className=" flex p-5">
              Cancel
            </Link>
          </button>
        </section>
      </form>
    </div>
  );
}

export default page;
