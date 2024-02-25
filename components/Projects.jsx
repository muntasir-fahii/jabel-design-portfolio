import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Medhab - healthcare website",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609364/jabel-design/design-1_rm23wj.jpg",
    description:
      "You are training future healthcare professionals whose careers will impact the health of our communities. MedHub has the experience and the tools help you manage program administration so you can focus on educating.",
  },
  {
    title: "Fusen Pack - custom packaging",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609365/jabel-design/design-2_iaffps.jpg",
    description:
      "Fusen Pack sells custom packaging to restaurants. We are building an e-commerce website that allows customers to design their own packaging by modifying design templates and placing orders.",
  },
  {
    title: "Intex - ecommerce website",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609363/jabel-design/design-3_oof0xa.jpg",
    description:
      "Anything business embarrassing hidden in the middle of text. Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a book.",
  },
  {
    title: "Campus - meetup app",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609368/jabel-design/design-4_epa2fh.jpg",
    description:
      "The campus connects students through shared experiences. Our mobile application allows university students to host and attend meetups in their local vicinity.",
  },
];

const Projects = () => {
  return (
    <section className="h-full w-full my-20  sp relative">
      <div className="wrapper grid gap-10 ">
        <div className="">
          <h2 className=" font-sans text-3xl font-bold">
            Have a look at my work
          </h2>
        </div>
        {projects.map((project) => (
          <div
            className="projects bg-gray bg-opacity-80 grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-8 rounded-3xl"
            key={project.title}
          >
            <div className="col-span-1 w-full h-64 sm:h-72 md:h-[22.5rem] rounded-3xl  overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 w-full flex flex-col items-center md:items-start justify-center  gap-10 rounded-3xl  overflow-hidden bg-light p-8">
              <div className="grid justify-center items-center text-center md:text-start gap-5">
                <h2 className="font-sans font-bold text-xl md:text-[22px] ">
                  {project.title}
                </h2>
                <p className="lg:w-[70%] h-44 sm:h-28 md:h-[4.5rem] lg:h-24 text-alt font-normal">
                  {project.description}
                </p>
              </div>
              <div className="flex text-center items-center flex-col md:flex-row md:gap-5  lg:gap-10">
                <Link
                  className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-8 rounded-[6.25rem] mb-5 md:mb-0"
                  href={"./"}
                >
                  live website
                </Link>
                <Link
                  className="font-oval font-semibold bg-gray py-[0.875rem] px-8 rounded-[6.25rem]"
                  href={"./"}
                >
                  case study
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="circle-2 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto -mt-[150rem] md:-mt-[145rem] lg:-mt-[100rem] rounded-full"></div>
      <div className="circle-3 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto mt-[30rem] md:mt-80 lg:-mt-24 rounded-full"></div>
      <div className="circle-4 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto mt-[30rem] md:mt-80 lg:mt-0 rounded-full"></div>
    </section>
  );
};

export default Projects;
