"use client";
import React from "react";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initFirebase } from "@/app/firebase/config";
import signUp from "../firebase/signup";
import app from "../firebase/config";
import { useRouter } from "next/navigation";

function SignUp() {
  let router = useRouter();
  const handleSignup = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    if (password === repeatPassword) {
      // alert("passwords match");
      const auth = getAuth(app);

      const { result, error } = await signUp(email, password);

      if (error) {
        return console.log(error);
      }

      // else successful
      alert('User Created')
      console.log(result);
      // return router.push("/admin")
      return router.push("/");
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    // ERROR- when this component loads it refreshes the page
    <div className="w-full max-w-xs m-auto my-[150px] ">
      <form
        className="shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSignup}
      >
        {/* FIRST NAME */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        {/* LAST NAME */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        {/* EMAIL */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        {/* PASSWORD */}
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          {/* Use state here to determine if passwords match on signup then set styles and messages accordingly */}
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        {/* REPEAT PASSWORD */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Repeat Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="repeatPassword"
            type="password"
            placeholder="******************"
          />
          {/* Use state here to determine if passwords match on signup then set styles and messages accordingly */}
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex items-center justify-center ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            // type="button"
          >
            Sign up
          </button>
        </div>
        <div className="flex space-x-5 mt-2">
          <p className=" text-sm text-gray-500">Already have an account?</p>
          <Link
            href="/Login"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Sign in
          </Link>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}

export default SignUp;
