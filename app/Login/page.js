"use client";
import React, { useState } from "react";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import signIn from "../firebase/signin";

import { useRouter } from "next/navigation";
function Login() {
  const [passEntered, setPassEntered] = useState(true);
  const [emailEntered, setEmailEntered] = useState(true);
  let router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    // password conditional
    if (!password.length) {
      setPassEntered(false);
    } else {
      setPassEntered(true);
    }

    // email conditional
    if (!email.length) {
      setEmailEntered(false);
    } else {
      setEmailEntered(true);
    }

    const auth = getAuth(app);

    await signIn(auth, email, password);
    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  return (
    <div className="w-full max-w-xs m-auto mt-[250px]">
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border ${
              !emailEntered ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="text"
            placeholder="Email"
          />
          {!emailEntered ? (
            <p className="text-red-500 text-xs italic">
              Please enter your Email.
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border ${
              !passEntered ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="******************"
          />
          {!passEntered ? (
            <p className="text-red-500 text-xs italic">
              Please enter your Password.
            </p>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#3AB0FF] hover:bg-[#287cb4] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-[#3AB0FF] hover:text-[#287cb4]"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex space-x-9 mt-2">
          <p className=" text-sm text-gray-500">Dont have an account?</p>
          <Link
            href="/Signup"
            className="inline-block align-baseline font-bold text-sm text-[#3AB0FF] hover:text-[#287cb4]"
          >
            Click Here
          </Link>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
