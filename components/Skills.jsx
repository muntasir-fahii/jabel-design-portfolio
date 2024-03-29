import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "branding",
  },
  {
    name: "figma",
  },
  {
    name: "saas",
  },
  {
    name: "website",
  },
  {
    name: "xd",
  },
  {
    name: "healthcare",
  },
  {
    name: "app design",
  },
  {
    name: "illustrator",
  },
  {
    name: "fintech",
  },
  {
    name: "visual design",
  },
  {
    name: "photoshop",
  },
  {
    name: "ecommerce",
  },
];

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

const Skills = () => {
  const items = useRef(null);
  const isInView = useInView(items);
  return (
    <section className=" wrapper h-full w-full relative">
      <div className="wrapper grid justify-center items-center py-10 lg:h-[27.5rem]  bg-gray bg-opacity-50 rounded-br-[6rem] rounded-bl-[6rem] md:rounded-br-[9.375rem] md:rounded-bl-[9.375rem] gap-5 lg:gap-0">
        <div
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="skill text-center"
        >
          <h2 className=" font-sans text-3xl lg:text-4xl font-bold">{`I'm an expert in these`}</h2>
        </div>
        <motion.div
          variants={container}
          ref={items}
          animate={isInView ? "visible" : "hidden"}
          className="skill grid sm:w-full  mx-auto grid-cols-2 md:grid-cols-3 gap-x-5 lg:gap-x-32 justify-between "
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <p className="bg-light py-[0.875rem] px-1 sm:px-8 rounded-[6.25rem] text-center font-oval font-semibold text-base lg:text-lg">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="circle-2 absolute  h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem]  -top-20 lg:-top-10   left-1/2 transform -translate-x-1/2  rounded-full"></div>
    </section>
  );
};

export default Skills;
