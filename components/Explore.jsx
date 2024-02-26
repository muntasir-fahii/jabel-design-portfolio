import Image from "next/image";
import Link from "next/link";

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
  return (
    <main>
      <section
        className="sp my-20 h-full w-full
       relative"
      >
        <div className="border-dark w-full  grid justify-center items-center mx-auto gap-5 md:gap-10">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold">
              My visual exploration
            </h2>
          </div>
          <div className="flex justify-center gap-3 xl:gap-5 items-center mx-auto">
            {top.map((image) => (
              <div
                className="xl:w-80 2xl:w-[28rem] xl:h-60 2xl:h-[22rem] rounded-xl sm:rounded-2xl   overflow-hidden"
                key={image.id}
              >
                <Image
                  src={image.img}
                  alt={image.id}
                  width={500}
                  height={500}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="exploration flex justify-center gap-3 xl:gap-5 items-center mx-auto">
            {bottom.map((image) => (
              <div
                className="xl:w-64 2xl:w-96 xl:h-52 2xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden "
                key={image.id}
              >
                <Image
                  src={image.img}
                  alt={image.id}
                  width={500}
                  height={500}
                  priority
                  className="h-full w-full object-cover "
                />
              </div>
            ))}
          </div>

          <div className="exploration mx-auto my-5 md:my-0">
            <Link
              className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-8 rounded-[6.25rem] "
              href={"./"}
            >
              view more
            </Link>
          </div>
        </div>
        <div className="circle-2 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-[40rem] left-12 sm:left-44 md:left-48 lg:left-60 xl:left-[25rem] 2xl:left-[44rem] rounded-full"></div>
      </section>
    </main>
  );
};

export default Explore;
