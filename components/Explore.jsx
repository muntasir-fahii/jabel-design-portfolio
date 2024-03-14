import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Explore = () => {
  return (
    <section
      className="sp my-20 h-full w-full
       relative"
    >
      <div className=" w-full  grid justify-center items-center mx-auto gap-10 md:gap-10 exploration">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="text-center"
        >
          <h2 className="font-sans text-3xl lg:text-4xl font-bold">
            My visual exploration
          </h2>
        </div>

        <Marquee
          speed={200}
          pauseOnHover={true}
          direction="left"
          loop={400}
          className="gap-5"
        >
          <div className="flex justify-between items-center gap-5">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-1_nssp9b.jpg"
                alt="first image"
                width={500}
                height={420}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858643/jabel-design/ex-2_gruqn7.jpg"
                alt="first image"
                width={500}
                height={420}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-3_wszqce.png"
                alt="first image"
                width={500}
                height={420}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858647/jabel-design/ex-4_xqfgiv.jpg"
                alt="first image"
                width={500}
                height={420}
                priority
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </Marquee>

        <Marquee
          speed={200}
          pauseOnHover={true}
          direction="right"
          loop={400}
          className="gap-5"
        >
          <div className="flex justify-between items-center gap-5">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858646/jabel-design/ex-5_awqxpg.jpg"
                alt="first image"
                width={500}
                height={350}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-6_ptksop.jpg"
                alt="first image"
                width={500}
                height={350}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858645/jabel-design/ex-7_pbbyhl.jpg"
                alt="first image"
                width={500}
                height={350}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858645/jabel-design/ex-8_ii0hwa.jpg"
                alt="first image"
                width={500}
                height={350}
                priority
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dcgreqowu/image/upload/v1708858644/jabel-design/ex-9_qq0g58.jpg"
                alt="first image"
                width={500}
                height={350}
                priority
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </Marquee>

        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="exploration mx-auto my-10 "
        >
          <Link
            className="font-oval font-medium shadow-lg bg-dark text-white text-xs sm:text-base py-3 px-4 sm:py-5 sm:px-8 rounded-[6.25rem] hover:bg-dark hover:text-light hover:shadow-xl eq"
            href={"https://dribbble.com/jabelahmed"}
          >
            view more
          </Link>
        </motion.div>
      </div>
      <div className="circle-2 z-1 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-[60rem] lg:top-72 xl:top-[30rem] 2xl:top-[55rem] left-1/2 transform -translate-x-1/2 rounded-full"></div>
    </section>
  );
};

export default Explore;
