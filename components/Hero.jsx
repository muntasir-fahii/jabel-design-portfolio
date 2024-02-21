import Image from "next/image";
import Link from "next/link";

import HeroImage from "../public/hero.jpg";

const Hero = () => {
  return (
    <main className="wrapper  p-10 md:p-0 w-full h-full lg:h-[calc(80vh-6rem)] grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 relative">
      <div className="flex flex-col justify-center items-center lg:items-start col-span-1 py-5 gap-10 ">
        <div className="grid gap-2 justify-center items-center  md:text-start w-full md:w-[44rem] ">
          <h4 className="font-oval font-semibold text-xl md:text-[22px] ">
            {`Hey 👋 nice to meet you. I'm Jabel Ahmed, Creative designer and`}
          </h4>
          <h1 className="font-sans font-bold text-3xl md:text-4xl md:w-[34rem]">
            helping founder, startup-company to change the digital experience.
          </h1>
        </div>

        <div className="flex text-center items-center flex-col md:flex-row md:gap-5  lg:gap-10">
          <Link
            className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-8 rounded-[6.25rem] mb-5 md:mb-0"
            href={"./"}
          >
            {`let's talk on telegram`}
          </Link>
          <Link
            className="font-oval font-semibold bg-gray py-[0.875rem] px-8 rounded-[6.25rem]"
            href={"./"}
          >
            meeting
          </Link>
        </div>
      </div>

      <div className="col-span-1 grid justify-center lg:justify-end items-center px-0 lg:px-10">
        <div className="bg-gray grid  justify-center items-center h-60 w-60 768:w-[24rem] 768:h-[24rem] rounded-full mx-auto">
          <Image
            src={HeroImage}
            alt="hero"
            width={500}
            height={500}
            className="hero-img rounded-full h-48 w-48 400:h-[17rem] 400:w-[17rem] mx-auto overflow-hidden"
          />
        </div>
      </div>

      <div className="circle absolute -top-16 -left-80 rounded-full"></div>
    </main>
  );
};

export default Hero;
