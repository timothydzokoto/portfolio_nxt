"use client";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  const hireMe = () => {
    console.log("Hire me clicked");
  };
  return (
    <div className="z-10 fixed flex flex-row bg-white shadow-md p-4 dark:bg-base-300 dark:shadow-gray-700 w-full h-[10vh] items-center justify-between font-mono pt-6">
      <div className="container flex mx-auto items-center justify-between">
        <div>
          <h1 className="text-lg text-black dark:text-teal-500 font-extrabold">
            iEM<span className="text-teal-500 dark:text-white">DEV</span>
          </h1>
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="flex gap-4">
            <div className="hover:cursor-pointer rounded-full p-2">
              <FaLinkedin size={20} />
            </div>
            <div className="hover:cursor-pointer rounded-full p-2">
              <FaGithub size={20} />
            </div>
          </div>
          <div className="flex items-center hover:cursor-pointer">
            <ThemeSwitcher />
          </div>
          <div className="hidden md:flex items-center text-sm">
            <Link href={`/contact`}>
              <Button
                text="Hire me"
                style={"animate-bounce"}
                onclick={hireMe}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
