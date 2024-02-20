import Image from "next/image";
import Link from "next/link";

import HeroImage from "../public/hero.jpg";

const Hero = () => {
  return (
    // <main className="wrapper bg-indigo-300 p-10 mx-auto h-full lg:h-[90vh] grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
    //   <div className=" grid justify-center items-center col-span-1 py-5 gap-10">
    //     <div className="grid gap-2 justify-center items-center text-center md:text-start w-full md:w-[40rem] ">
    //       <h4 className="font-oval font-semibold text-lg md:text-xl ">{`Hey 👋 nice to meet you. I'm Jabel Ahmed, Creative designer and`}</h4>
    //       <h1 className="font-sans font-bold text-2xl md:text-4xl md:w-[38rem]">
    //         helping founder, startup-company to change the digital experience.
    //       </h1>
    //     </div>

    //     <div className="flex text-center   items-center gap-5 lg:gap-10">
    //       <Link
    //         className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-8  rounded-[6.25rem]"
    //         href={"./"}
    //       >
    //         {` let's talk on telegram`}
    //       </Link>
    //       <Link
    //         className="font-oval bg-gray py-[0.875rem] px-8  rounded-[6.25rem]"
    //         href={"./"}
    //       >
    //         meeting
    //       </Link>
    //     </div>
    //   </div>

    //   <div>
    //     <div className="bg-gray grid grid-cols-1 justify-center items-center w-52 h-52 rounded-full mx-auto">
    //       <Image
    //         src={HeroImage}
    //         alt="hero"
    //         width={500}
    //         height={500}
    //         className="hero-img rounded-full mx-auto overflow-hidden"
    //       />
    //     </div>
    //   </div>
    // </main>

    // test
    <main className="wrapper w-full overflow-x-hidden p-10  mx-auto h-full lg:h-[90vh] grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 ">
      <div className="grid justify-center items-center col-span-1 py-5 gap-10">
        <div className="grid gap-2 justify-center items-center  md:text-start w-full md:w-[44rem] ">
          <h4 className="font-oval font-semibold text-lg md:text-[22px] ">
            {`Hey 👋 nice to meet you. I'm Jabel Ahmed, Creative designer and`}
          </h4>
          <h1 className="font-sans font-bold text-2xl md:text-4xl md:w-[34rem]">
            helping founder, startup-company to change the digital experience.
          </h1>
        </div>

        <div className="flex text-center items-center flex-col md:flex-row  lg:gap-10">
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

      <div className="md:flex md:items-center">
        <div className="bg-gray grid grid-cols-1 justify-center items-center w-[20rem] h-[20rem] rounded-full mx-auto">
          <Image
            src={HeroImage}
            alt="hero"
            width={500}
            height={500}
            className="hero-img rounded-full mx-auto overflow-hidden"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
