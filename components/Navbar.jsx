"use client";

import Link from "next/link";
import Header from "./header";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import copy from "clipboard-copy";
import Image from "next/legacy/image";

const CV_LINK =
  "https://drive.google.com/uc?export=download&id=1h5fnAxSzprA4qnqjEjwjlHFqHZZGYxPG";

const LOGO =
  "https://res.cloudinary.com/dcgreqowu/image/upload/v1709983529/favicon_uvpjcn.png";

const navbar = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
      delayChildren: 0.3,
      staggerChildren: 0.9,
    },
  },
};

const Navbar = () => {
  const initialText = "mail me";
  const copiedText = "heyjabel@gmail.com";

  const [buttonText, setButtonText] = useState(initialText);

  useEffect(() => {
    if (buttonText === "copied!") {
      const resetTimeout = setTimeout(() => {
        setButtonText(initialText);
      }, 1000);

      return () => clearTimeout(resetTimeout);
    }
  }, [buttonText, initialText]);

  const handleButtonClick = async () => {
    try {
      await copy(copiedText);
      setButtonText("copied!");
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };
  const nav = useRef(null);
  const isInView = useInView(nav);

  return (
    <>
      <motion.header
        ref={nav}
        variants={navbar}
        animate={isInView ? "visible" : "hidden"}
        className="hidden lg:block"
      >
        <nav className="wrapper h-24 flex justify-between items-center mx-auto">
          <motion.div
            variants={navbar}
            className="flex justify-between items-center gap-10"
          >
            <Image
              src="/favicon.png"
              alt="logo"
              height={50}
              width={50}
              priority
              className="object-cover
              "
            />

            <ul className="flex font-oval justify-between gap-10 bg-gray py-5 px-6 items-center rounded-[6.25rem]">
              <li className="nav-link eq">
                <Link href={"https://dribbble.com/jabelahmed"}>dribbble</Link>
              </li>
              <li className="nav-link eq">
                <Link href={"https://www.behance.net/jabelahmed"}>behance</Link>
              </li>
              <li className="nav-link eq">
                <Link
                  href={"https://www.linkedin.com/in/jabel-ahmed-1810b3152"}
                >
                  linkedin
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={navbar}
            className="flex justify-between items-center gap-10"
          >
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  className="font-oval bg-gray py-5 px-10 rounded-[6.25rem] hover:bg-dark hover:text-light hover:shadow-lg eq"
                  href={CV_LINK}
                  target="_blank"
                  download={CV_LINK}
                >
                  cv
                </Link>
              </motion.div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={""}
                  onClick={handleButtonClick}
                  className="font-oval font-medium shadow-lg bg-dark text-white py-5 px-12  rounded-[6.25rem] hover:bg-dark hover:text-light hover:shadow-xl eq"
                >
                  {buttonText}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      <div className="lg:hidden absolute w-screen h-screen  z-[900]  top-0 left-0 right-0 bottom-0 flex justify-center ">
        <Header />
      </div>
    </>
  );
};

export default Navbar;
