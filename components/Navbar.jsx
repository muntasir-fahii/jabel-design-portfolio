import Link from "next/link";
import Header from "./header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CV_LINK =
  "https://drive.google.com/uc?export=download&id=1h5fnAxSzprA4qnqjEjwjlHFqHZZGYxPG";

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
  const nav = useRef(null);
  const isInView = useInView(nav);

  return (
    <>
      <motion.header
        ref={nav}
        variants={navbar}
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:block"
      >
        <nav className="wrapper h-24 flex justify-between items-center mx-auto">
          <motion.div
            variants={navbar}
            className="flex justify-between items-center gap-10"
          >
            <Link className="font-oval font-semibold" href={"./"}>
              jabel.design
            </Link>
            <ul className="flex font-sans justify-between gap-10 bg-gray py-[0.875rem] px-6 items-center rounded-[6.25rem]">
              <li className="nav-link eq">
                <Link href={"https://dribbble.com/jabelahmed"}>dribble</Link>
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
                className=" font-oval bg-gray py-5 px-10 rounded-[6.25rem] hover:bg-dark hover:text-light eq"
              >
                <Link href={CV_LINK} target="_blank" download={CV_LINK}>
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
                className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-12  rounded-[6.25rem] hover:bg-gray hover:text-dark eq"
              >
                <Link href={""}>mail me</Link>
              </motion.div>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      <div className="md:hidden absolute w-screen h-screen  z-[900]  top-0 left-0 right-0 bottom-0 flex justify-center ">
        <Header />
      </div>
    </>
  );
};

export default Navbar;
