"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/hero.jpg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { animateSplitText } from "./gsap-anime";
// import { useEffect } from "react";

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
    <main className="wrapper p-10 md:p-0 mb-10 w-full h-full lg:h-[calc(90vh-6rem)] grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 relative">
      <div className="flex flex-col justify-center items-center lg:items-start col-span-1 py-5 gap-10 ">
        <motion.div
          ref={description}
          variants={slideUp}
          animate={isInView ? "open" : "closed"}
          className="grid gap-2 justify-center items-center  md:text-start w-full md:w-[44rem] py-1 overflow-hidden"
        >
          <motion.h4
            variants={slideUpTop}
            className="split font-oval font-semibold text-xl md:text-[22px] "
          >
            {`Hey 👋 nice to meet you. I'm Jabel Ahmed, Creative designer and`}
          </motion.h4>
          <motion.h1
            variants={slideUp}
            className="font-sans font-bold text-3xl md:text-4xl md:w-[34rem]"
          >
            helping founder, startup-company to change the digital experience.
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          // variants={imgSlideUp}
          // animate={isInView? 'open' : 'closed'}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="flex text-center items-center flex-col md:flex-row md:gap-5  lg:gap-10"
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-8 rounded-[6.25rem] mb-5 md:mb-0 hover:bg-gray hover:text-dark eq"
          >
            <Link
              href={"https://web.telegram.org/a/#5679486453"}
            >{`let's talk on telegram`}</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            // variants={imgSlideUp}
            // animate={isInView? 'open' : 'closed'}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className=" font-oval font-semibold bg-gray py-[0.875rem] px-8 rounded-[6.25rem] hover:bg-dark hover:text-light eq"
            >
              <Link href={"./"}>meeting</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="col-span-1 grid justify-center lg:justify-end items-center px-0 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          // variants={imgSlideUp}
          // animate={isInView? 'open' : 'closed'}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-gray grid  justify-center items-center h-60 w-60 768:w-[24rem] 768:h-[24rem] rounded-full mx-auto"
        >
          <Image
            src={HeroImage}
            alt="hero"
            width={500}
            height={500}
            className="hero-img rounded-full h-48 w-48 400:h-[17rem] 400:w-[17rem] mx-auto overflow-hidden"
          />
        </motion.div>
      </div>

      <div className="circle absolute -top-16 -left-80 rounded-full"></div>
    </main>
  );
};

export default Hero;
