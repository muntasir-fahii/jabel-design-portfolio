import Image from "next/image";

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
    <section className="h-full w-full sp relative">
      <div className="wrapper">
        <div className="skill">
          <h2 className=" font-sans text-3xl font-bold">
            Have a look at my work
          </h2>
        </div>
        {projects.map((project) => (
          <div key={project.title}>
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
