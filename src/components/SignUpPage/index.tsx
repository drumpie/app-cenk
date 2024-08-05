import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import LoginButton from "../../shared/LoginButton";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { PolicyButton } from "../../shared/PolicyButton";

export default function SignUpPage() {
  const isOnSignUpPage = location.pathname === "/sign-up";
  return (
    <>
      <motion.div
        className="bg-gray-20 font-montserrat flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="font-montserrat sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            alt="EvoGYM Logo"
            src={Logo}
            className="font-montserrat mx-auto h-auto w-auto"
          />
          <h2 className="font-montserrat mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        {/* REGISTER INFOS */}
        <div className="font-montserrat mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* USERNAME INFO */}
          <form action="#" method="POST" className="font-montserrat space-y-4">
            <div>
              <div className="font-montserrat flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="font-montserrat block w-full text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="current-username"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* EMAIL INFO */}
            <div>
              <label
                htmlFor="email"
                className="font-montserrat block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="current-email"
                  className="font-montserrat block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* PASSWORD INFO */}
            <div>
              <div className="font-montserrat flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-montserrat block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                required
                className="relative flex-col size-3.5 hover:cursor-pointer "
              />
              <label htmlFor="checkbox" className="text-xs px-1.5">
                <PolicyButton />
              </label>
            </div>
            {/* SUBMIT BUTTON */}
            <div>
              <button
                type="submit"
                className="bg-secondary-500 flex w-full justify-center rounded-md bg-6 
                text-black shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outli-secondary-500 px-3 py-1.5 text-sm 
                font-montserrat leadingne-indigo-600 duration-300 hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* FOOTER FOR LOGIN */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <span className="ml-1 text-red-900 hover:text-red-600">
              <LoginButton />
            </span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
