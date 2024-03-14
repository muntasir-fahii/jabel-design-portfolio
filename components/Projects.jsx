import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Medhab - healthcare website",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609364/jabel-design/design-1_rm23wj.jpg",
    description:
      "You are training future healthcare professionals whose careers will impact the health of our communities. At MedHub, we know that this is no small feat. You need a partner that makes program administration efficient and effective. MedHub has the experience and the tools to streamline your program administration, so you can focus on educating.",
    link: "https://www.medhub.com",
    caseStudy:
      "https://www.behance.net/gallery/136756759/Medhub-Healthcare-Education-Management",
  },
  {
    title: "ATI - nursing education",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1709817523/photo1709817221_yleubi.jpg",
    description:
      "We have a real understanding of what it takes to become a nurse. ATI Nursing Education began with the help of a nurse and many nurses are a valued part of our company today. We also have a real understanding for what it takes to pass high-stakes tests. We boast a team of people (graduate-degreed psychometricians) who specialize in tests. Every nursing student is unique. Some are young. Some are middle-aged. Some are moms. Some are dads. Some are morning people. Some are night owls. Some learn by the book. Others learn best online – which you should know, we are the leader in online learning. Intuitively, ATI Nursing Education's learning systems are designed to teach the way individuals learn. Whether it’s an RN or a PN program, we’re with your students from the beginning of school through the beginning of their nursing career and it’s done with the kind of personal, caring attention that’s synonymous with nursing. ",
    link: "https://www.atitesting.com/teas",
    caseStudy: "",
  },
  {
    title: "Intex - ecommerce website",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609363/jabel-design/design-3_oof0xa.jpg",
    description:
      "Intex Recreation Corp. was founded by Mr. Zee in 1964 in Los Angeles, California. Today the company distributes various types of goods all over the world: inflatable mattresses, above ground swimming pools, hydromassage spas, home furnishings, inflatables, toys, kayaks and dinghies.     For the Italian market, the branch authorized by Intex Recreation Corp. is Unitex Italia Srl, which administers and manages the distribution of Intex brand products in Italy.   ",
    link: "https://www.intexitalia.com/",
    caseStudy: "",
  },
  {
    title: "Campus - meetup app",
    image:
      "https://res.cloudinary.com/dcgreqowu/image/upload/v1708609368/jabel-design/design-4_epa2fh.jpg",
    description:
      "Campus connects students through shared experiences. Our mobile application allows university students to host and attend meetups in their local vicinity. With the incorporation of profiles, you can identify students attending various meetups and see details such as where they currently study. The application serves the purpose of bringing meaningful interaction to students lives were they can meet likeminded individuals and form long term relationships. In a generation of technology, students have become more isolated and lonely than ever before. Barriers to entry for certain social events make it challenging to find people who are on the same wavelength. Meeting people with common interests helps to diverge great connections between one another, subsequently diversifying students social life.",
    link: "",
    caseStudy: "https://www.behance.net/gallery/117258671/Campus-Meetup-App",
  },
];

const Projects = () => {
  return (
    <section className="h-full my-20 sp relative">
      <div className="hidden stripe lg:block absolute -top-20 left-1/2 transform -translate-x-1/2">
        <div className=" h-[2485px] w-96 flex justify-between">
          <span className="border border-gray border-opacity-60 h-full"></span>
          <span className="border border-gray border-opacity-60 h-full"></span>
          <span className="border border-gray border-opacity-60 h-full"></span>
          <span className="border border-gray border-opacity-60 h-full"></span>
          <span className="border border-gray border-opacity-60 h-full"></span>
          <span className="border border-gray border-opacity-60 h-full"></span>
        </div>
      </div>
      <div className="wrapper grid gap-10 ">
        <div className="circle-2 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-[48rem] sm:top-[42rem] md:top-[38rem] lg:top-[30rem] left-1/2 transform -translate-x-1/2 rounded-full"></div>

        <div className="circle-3 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-[98rem] sm:top-[88rem] md:top-[80rem] lg:top-[70rem] left-1/2 transform -translate-x-1/2 rounded-full"></div>

        <div className="circle-4 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-[148rem] sm:top-[138rem] md:top-[126rem] lg:top-[104rem] left-1/2 transform -translate-x-1/2 rounded-full"></div>

        <div data-aos="fade-right" data-aos-duration="800" className=" ">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold  overflow-hidden">
            Have a look at my work
          </h2>
        </div>
        {projects.map((project, index) => (
          <div
            data-aos="zoom-in-up"
            // data-aos-easing="linear"
            data-aos-duration="900"
            data-aos-delay="250"
            className={`projects bg-gray h-full
             bg-opacity-80 grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-8 rounded-3xl ${
               index === projects.length - 1 ? "last-child" : ""
             }`}
            key={index}
          >
            <div className="col-span-1  h-72 sm:h-72 md:h-[28rem] rounded-3xl  overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="col-span-1 flex flex-col items-center md:items-start justify-evenly gap-1 md:gap-10 rounded-3xl overflow-hidden h-[30rem]
         lg:h-full bg-light px-1 md:px-10"
            >
              <div className="grid  text-center md:text-start gap-5">
                <h2 className="font-sans font-bold text-xl md:text-3xl ">
                  {project.title}
                </h2>
                <p className=" project-text font-oval h-full lg:text-lg text-alt line-clamp-6  lg:line-clamp-5  text-center md:text-start  mx-auto md:mx-0 ">
                  {project.description}
                </p>
              </div>
              <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-5">
                {index === projects.length - 1 ? (
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={project.caseStudy}
                      target="_blank"
                      className="font-oval font-semibold  bg-gray py-3 px-4 w-full text-xs sm:text-base  sm:py-5 sm:px-8 rounded-[6.25rem] hover:bg-dark hover:text-light eq"
                    >
                      full case study
                    </Link>
                  </motion.div>
                ) : index >= 1 && index <= 2 ? (
                  // Render only the "Live Website" button for the second and third children
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      className="font-oval font-medium shadow-lg bg-dark text-white py-3 px-4 w-full text-xs sm:text-base  sm:py-5 sm:px-8 rounded-[6.25rem] mb-5 md:mb-0 hover:bg-dark hover:text-light eq"
                    >
                      live website
                    </Link>
                  </motion.div>
                ) : (
                  // Render both "Live Website" and "Case Study" buttons for other children
                  <>
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        className={`font-oval font-medium shadow-lg bg-dark text-white py-3 px-4 w-full text-xs sm:text-base  sm:py-5 sm:px-8 rounded-[6.25rem] mb-5 md:mb-0 hover:bg-${
                          index === 0 ? "dark" : "gray"
                        } hover:text-${
                          index === 0 ? "light" : "dark"
                        } hover:shadow-xl eq`}
                      >
                        live website
                      </Link>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        href={project.caseStudy}
                        target="_blank"
                        className="font-oval font-semibold  bg-gray py-3 px-4 w-full text-xs sm:text-base  sm:py-5 sm:px-8 rounded-[6.25rem] hover:bg-dark hover:text-light hover:shadow-lg eq"
                      >
                        case study
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
//
export default Projects;
