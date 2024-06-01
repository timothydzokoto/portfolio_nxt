"use client";

import React from "react";
import Photo from "./Photo";
import { IconButton } from "./IconButton";
import { FaDownload } from "react-icons/fa";
import { Socials } from "./Socials";

const Hero = () => {
  const onCVButtonClick = () => {
    console.log("Download cv clicked");
  };
  return (
    <section className="flex flex-col md:flex-row md:mx-[5vw] mx-auto h-full ">
      <div className="flex  w-screen h-[90vh] flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col w-full h-full text-center items-center justify-center order-2 md:order-none">
          <span className="text-xl mb-4">Software Developer</span>
          <h1 className="text-2xl mb-6">
            Hello I&rsquo;m <br />{" "}
            <span className="text-teal-500">Timothy Dzokoto</span>
          </h1>
          <p className="max-w-[400px] mb-8">
            I specialize in both hybrid mobile application development and
            full-stack web development. I thrive on creating seamless and
            responsive user experiences across different platforms
          </p>
          {/* Download CV button and Social media icons */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <IconButton
              onclick={onCVButtonClick}
              text="Download CV"
              icon={<FaDownload />}
              style="btn btn-outline btn-accent"
            />

            <Socials />
          </div>
        </div>

        {/* Photo section  */}
        <div className="flex md:justify-center md:items-center w-full h-full">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
