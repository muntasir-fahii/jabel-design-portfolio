import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
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
  return (
    <Marquee speed={200} pauseOnHover={true} direction="right" loop={400}>
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
  );
};

export default Sliderbottom;
