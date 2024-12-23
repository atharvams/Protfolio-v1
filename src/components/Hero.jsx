import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profile from "../assets/Profile.png";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-thin text-6xl pb-16 tracking-tight lg:mt-16 lg:text-7xl ">
              Atharva M.S.
            </h1>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight text-3xl text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
