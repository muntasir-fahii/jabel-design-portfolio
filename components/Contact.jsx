import Link from "next/link";

const Contact = () => {
  return (
    <section className="sp h-full lg:h-[80vh] xl:[70vh] w-full relative">
      <div className="wrapper  grid justify-center items-center py-10 lg:py-20 bg-gray bg-opacity-80 rounded-br-[9.375rem] rounded-bl-[9.375rem] gap-20 ">
        <div className="grid gap-5">
          <div className="text-center">
            <h2 className="font-sans text-3xl font-semibold">{`Let's work together`}</h2>
          </div>
          <div className="text-center">
            <h1 className="font-sans text-6xl font-bold">heyjabel@gmail.com</h1>
          </div>
        </div>
        <div className="social-link grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Link
            href={"/"}
            className="bg-light  py-[0.875rem] px-8 rounded-[6.25rem] text-center font-oval font-semibold"
          >
            dribbble
          </Link>
          <Link
            href={"/"}
            className="bg-light  py-[0.875rem] px-8 rounded-[6.25rem] text-center font-oval font-semibold"
          >
            behance
          </Link>
          <Link
            href={"/"}
            className="bg-light  py-[0.875rem] px-8 rounded-[6.25rem] text-center font-oval font-semibold"
          >
            linkedin
          </Link>
          <Link
            href={"/"}
            className="bg-light  py-[0.875rem] px-8 rounded-[6.25rem] text-center font-oval font-semibold"
          >
            instagram
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
