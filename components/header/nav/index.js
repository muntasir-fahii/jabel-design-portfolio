import React, { useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anime";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import Image from "next/image";

const navItems = [
  {
    title: "dribble",
    href: "https://dribbble.com/jabelahmed",
  },
  {
    title: "behance",
    href: "https://www.behance.net/jabelahmed",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/jabel-ahmed-1810b3152",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <Image
              src="/favicon.png"
              alt="logo"
              height={50}
              width={50}
              priority
              className="object-cover
              "
            />
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                // isActive={selectedIndicator == data.href}
                // setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
