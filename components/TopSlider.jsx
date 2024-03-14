import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";

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
  return (
    <Marquee speed={200} pauseOnHover={true} direction="left" loop={400}>
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
  );
};

export default TopSlider;
