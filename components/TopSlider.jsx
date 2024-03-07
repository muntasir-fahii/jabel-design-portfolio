"use client";
import Image from "next/image";
import { useEffect } from "react";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const top = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-1_nssp9b.jpg",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858643/jabel-design/ex-2_gruqn7.jpg",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-3_wszqce.png",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858647/jabel-design/ex-4_xqfgiv.jpg",
  },
];

const TopSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".sample-slider", {
      loop: true,
      autoplay: {
        delay: 0, // Adjust delay as needed
        pauseOnMouseEnter: true, // added
        disableOnInteraction: false, // added
      },
      speed: 3000,
      slidesPerView: 1, // Default number of slides
      breakpoints: {
        // Responsive breakpoints
        640: {
          slidesPerView: 1, // Number of slides on screens 640px and above
        },
        768: {
          slidesPerView: 2, // Number of slides on screens 768px and above
        },
        1024: {
          slidesPerView: 3, // Number of slides on screens 1024px and above
        },
        1280: {
          slidesPerView: 3, // Number of slides on screens 1280px and above
        },
      },
      centeredSlides: true,
      spaceBetween: 20,
    });
  }, []);

  return (
    <div className="swiper sample-slider  mx-auto">
      <div className="swiper-wrapper">
        {[...top, ...top].map((image, index) => (
          <div
            key={index}
            className="swiper-slide rounded-xl slide-top sm:rounded-2xl overflow-hidden"
            style={{
              // height: "auto", // Set height to auto for responsiveness
              // width: "100%", // Set width to 100% for responsiveness
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
              width={400}
              height={300}
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-xl sm:rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
