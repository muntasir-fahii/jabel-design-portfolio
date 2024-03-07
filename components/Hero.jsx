"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/hero.jpg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const slideUp = {
  initial: {
    y: "20%",
    opacity: 0,
  },

  open: {
    y: "0%",
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 0.9 },
  },

  closed: {
    y: "20%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const slideUpTop = {
  initial: {
    y: "20%",
    opacity: 0,
  },

  open: {
    y: "0%",
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 0.9 },
  },

  closed: {
    y: "20%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <main className="wrapper  p-5 w-full mb-36 gap-5  flex flex-col lg:flex-row justify-between  items-center mt-0 lg:mt-72 relative">
      <div className="grid justify-center items-center lg:items-start col-span-1 py-5 gap-10 lg:gap-16 ">
        <motion.div
          ref={description}
          variants={slideUp}
          animate={isInView ? "open" : "closed"}
          className="grid gap-2  items-center  md:text-start w-full py-1 overflow-hidden"
        >
          <motion.h4
            variants={slideUpTop}
            className="split font-oval font-semibold text-xl md:text-2xl "
          >
            Hey <span className="wave">👋</span> nice to meet you.
            {`I'm Jabel Ahmed`}, Creative designer and
          </motion.h4>
          <motion.h1
            variants={slideUp}
            className="font-sans font-bold text-3xl md:text-5xl"
          >
            helping founder, startup-company <br className="hidden md:block" />
            to change the digital experience.
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="flex gap-14 flex-col md:flex-row justify-center items-center lg:justify-start  h-full md:gap-5"
        >
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
            <Link
              href={"https://web.telegram.org/a/#5679486453"}
              className="font-oval font-medium shadow-lg bg-dark text-white py-5
               px-8 rounded-[6.25rem] mb-5 md:mb-0 hover:bg-dark hover:text-light hover:shadow-xl eq"
            >{`let's talk on telegram`}</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
              <Link
                href={"./"}
                className=" font-oval font-semibold shadow-md bg-gray py-5 px-8 rounded-[6.25rem] hover:bg-dark hover:text-light hover:shadow-lg eq"
              >
                meeting
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="col-span-1 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-gray grid justify-center items-center h-60 w-60 md:w-[19rem] md:h-[19rem] rounded-full mx-auto"
        >
          <Image
            src={HeroImage}
            alt="hero"
            width={500}
            height={500}
            className="hero-img rounded-full h-48 w-48 md:h-[16rem] md:w-[16rem] mx-auto overflow-hidden"
          />
        </motion.div>
      </div>

      <div className="circle absolute -top-12 -left-80 rounded-full"></div>
    </main>
  );
};

export default Hero;
