"use client";
import Image from "next/image";
import { useEffect } from "react";
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

const Sliderbottom = () => {
  useEffect(() => {
    const swiper = new Swiper(".sample-slider", {
      loop: true,
      autoplay: {
        delay: 0, // Adjust delay as needed
        pauseOnMouseEnter: true, // added
        disableOnInteraction: false, // added
        reverseDirection: true,
      },
      speed: 3000,
      slidesPerView: 3,
    });
  }, []);

  return (
    <div className="swiper sample-slider slider-bottom flex bg-black justify-center gap-3 xl:gap-5 items-center mx-auto exploration">
      <div className="swiper-wrapper ">
        {bottom.map((image, index) => (
          <div
            key={index}
            className="swiper-slide rounded-xl  sm:rounded-2xl overflow-hidden"
            style={{ height: "300px", width: "160px", marginRight: "10px" }}
          >
            <Image
              src={image.img}
              alt={index}
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliderbottom;
