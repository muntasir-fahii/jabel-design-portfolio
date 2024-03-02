import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const slideUp = {
  initial: {
    y: "200%",
  },

  open: {
    y: "0%",
    transition: { staggerChildren: 0.5, duration: 0.9, delay: 0.01 },
  },

  closed: {
    y: "200%",
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <motion.div
      ref={description}
      variants={slideUp}
      animate={isInView ? "open" : "closed"}
      className="font-sans text-center text-alt"
    >
      <p>@2024 Portfolio by Jabel Ahmed</p>
    </motion.div>
  );
};

export default Footer;
