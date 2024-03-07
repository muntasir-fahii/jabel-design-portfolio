"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import copy from "clipboard-copy";

const slideUp = {
  initial: {
    y: "50%",
  },

  open: {
    y: "0%",
    transition: { staggerChildren: 0.5, duration: 0.9, delay: 0.01 },
  },

  closed: {
    y: "50%",
    transition: { duration: 0.5 },
  },
};
const slideUpTop = {
  initial: {
    y: "-80%",
  },

  open: {
    y: "0%",
    transition: { staggerChildren: 0.5, duration: 0.9, delay: 0.01 },
  },

  closed: {
    y: "-80%",
    transition: { duration: 0.5 },
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Contact = () => {
  const initialText = "heyjabel@gmail.com";
  const copiedText = "copied!";
  const [displayText, setDisplayText] = useState(initialText);

  useEffect(() => {
    if (displayText === copiedText) {
      const resetTimeout = setTimeout(() => {
        setDisplayText(initialText);
      }, 1500);

      return () => clearTimeout(resetTimeout);
    }
  }, [displayText, initialText]);

  const handleTextClick = async () => {
    try {
      await copy(initialText);
      setDisplayText(copiedText);
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };

  const description = useRef(null);
  const isInView = useInView(description);

  const items = useRef(null);
  const isInViewSocials = useInView(items);
  return (
    <section className="wrapper sp h-full  w-full relative">
      <div className="wrapper  grid justify-center items-center py-10 lg:py-20 bg-gray bg-opacity-80 rounded-br-[9.375rem] rounded-bl-[9.375rem] gap-20 lg:h-[27.5rem]">
        <motion.div
          ref={description}
          variants={slideUp}
          animate={isInView ? "open" : "closed"}
          className="grid gap-5"
        >
          <div className="text-center">
            <motion.h2
              variants={slideUpTop}
              className="font-sans text-2xl sm:text-3xl font-semibold"
            >{`Let's work together`}</motion.h2>
          </div>
          <motion.div variants={slideUp} className="text-center">
            <div
              onClick={handleTextClick}
              className="font-sans text-3xl sm:text-5xl font-bold cursor-pointer"
            >
              {displayText}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={items}
          variants={container}
          animate={isInViewSocials ? "visible" : "hidden"}
          className="social-link justify-center items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <motion.div
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href={"https://dribbble.com/jabelahmed"}
              className="bg-light  py-5 px-8 rounded-[6.25rem] text-center font-oval font-semibold hover:bg-dark hover:text-light hover:shadow-xl eq"
            >
              dribbble
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href={"https://www.behance.net/jabelahmed"}
              className="bg-light  py-5 px-8 rounded-[6.25rem] text-center font-oval font-semibold hover:bg-dark hover:text-light hover:shadow-xl eq"
            >
              behance
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href={"https://www.linkedin.com/in/jabel-ahmed-1810b3152"}
              className="bg-light  py-5 px-8 rounded-[6.25rem] text-center font-oval font-semibold hover:bg-dark hover:text-light hover:shadow-xl eq"
            >
              linkedin
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href={"https://www.instagram.com/jabelahmed5050"}
              className="bg-light  py-5 px-8 rounded-[6.25rem] text-center font-oval font-semibold  hover:bg-dark hover:text-light hover:shadow-xl eq"
            >
              instagram
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
