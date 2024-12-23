import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { animate, motion } from "motion/react";

const iconVarients = (timeDuration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: timeDuration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="text-center my-20 text-4xl">Technologies</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <motion.div
          variants={iconVarients(1.5)}
          initial="initial"
          animate="animate"
          className="floating-box rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="floating-box-oppo rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVarients(1)}
          initial="initial"
          animate="animate"
          className="floating-box rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVarients(1.5)}
          initial="initial"
          animate="animate"
          className="floating-box-oppo rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="floating-box rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVarients(1)}
          initial="initial"
          animate="animate"
          className="floating-box-oppo rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-blue-500" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
