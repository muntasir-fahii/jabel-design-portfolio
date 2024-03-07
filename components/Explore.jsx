import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TopSlider from "./TopSlider";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const bottom = [
  {
    id: 5,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858646/jabel-design/ex-5_awqxpg.jpg",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-6_ptksop.jpg",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858645/jabel-design/ex-7_pbbyhl.jpg",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858645/jabel-design/ex-8_ii0hwa.jpg",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858644/jabel-design/ex-9_qq0g58.jpg",
  },
];

const Explore = () => {
  useEffect(() => {
    const swiper = new Swiper(".bottom-slider", {
      loop: true,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter: true, // added
        disableOnInteraction: false, // added
      },
      speed: 3000,
      slidesPerView: 1,
      breakpoints: {
        // Responsive breakpoints
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      centeredSlides: true,
    });
  }, []);

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

        <TopSlider />

        <div className="swiper bottom-slider  flex justify-center gap-3 xl:gap-5 items-center mx-auto">
          <div className="swiper-wrapper">
            {[...bottom, ...bottom].map((image, index) => (
              <div
                key={index}
                className="swiper-slide rounded-xl slide-bottom  sm:rounded-2xl overflow-hidden exploration"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  gap: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image.img}
                  alt={index}
                  layout="responsive"
                  width={250}
                  height={150}
                  objectFit="cover"
                  objectPosition="center"
                  priority
                  className="rounded-xl sm:rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="exploration mx-auto my-10 "
        >
          <Link
            className="font-oval font-medium shadow-lg bg-dark text-white py-5 px-8 rounded-[6.25rem] hover:bg-dark hover:text-light hover:shadow-xl eq"
            href={"https://dribbble.com/jabelahmed"}
          >
            view more
          </Link>
        </motion.div>
      </div>
      <div className="circle-2 z-1 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-44 lg:top-72 xl:top-[30rem] 2xl:top-[60rem] left-1/2 transform -translate-x-1/2 rounded-full"></div>
    </section>
  );
};

export default Explore;
