import Image from "next/image";

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
      <section className="sp">
        <div className="grid justify-center items-center mx-auto gap-10">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-bold">
              My visual exploration
            </h2>
          </div>
          <div className="top">
            {top.map((image) => (
              <div
                className="w-[28rem] h-[22rem] rounded-2xl overflow-hidden"
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
          <div className="bottom">
            {bottom.map((image) => (
              <div
                className="w-96 h-80 rounded-2xl overflow-hidden "
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
        </div>
      </section>
    </main>
  );
};

export default Explore;
