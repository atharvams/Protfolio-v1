import React from "react";
import aboutimg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="text-4xl text-center my-20">
        About
        <span className="text-neutral-400"> me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" width={400} height={400} src={aboutimg} alt="about img" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-center">
            <p className="mx-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
