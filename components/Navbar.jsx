import Link from "next/link";
import Header from "./header";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <header
        // initial={{ opacity: 0, y: "-100%" }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, x: "100%" }}
        // transition={{ ease: "easeOut", duration: 2 }}
        className="hidden md:block"
      >
        <nav className="wrapper h-24 flex justify-between items-center ">
          <div className="flex justify-between items-center gap-10">
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
          </div>
          <div className="flex justify-between items-center gap-10">
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className=" font-oval bg-gray py-[0.875rem] px-8 rounded-[6.25rem] hover:bg-dark hover:text-light eq"
            >
              <Link href={"./"}>cv</Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-12  rounded-[6.25rem] hover:bg-gray hover:text-dark eq"
            >
              <Link href={"./"}>mail me</Link>
            </motion.div>
          </div>
        </nav>
      </header>

      <div className="md:hidden absolute w-screen h-screen  z-[900]  top-0 left-0 right-0 bottom-0 flex justify-center ">
        <Header />
      </div>
    </>
  );
};

export default Navbar;
