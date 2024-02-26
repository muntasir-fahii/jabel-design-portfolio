const skills = [
  {
    name: "branding",
  },
  {
    name: "figma",
  },
  {
    name: "saas",
  },
  {
    name: "website",
  },
  {
    name: "xd",
  },
  {
    name: "healthcare",
  },
  {
    name: "app design",
  },
  {
    name: "illustrator",
  },
  {
    name: "fintech",
  },
  {
    name: "visual design",
  },
  {
    name: "photoshop",
  },
  {
    name: "ecommerce",
  },
];

const Skills = () => {
  return (
    <section className="sp h-full lg:h-[100vh] xl:[70vh] w-full relative">
      <div className="wrapper  grid justify-center items-center py-10 lg:py-20 bg-gray bg-opacity-80 rounded-br-[9.375rem] rounded-bl-[9.375rem] gap-8 ">
        <div className="skill text-center">
          <h2 className=" font-sans text-3xl font-bold">{`I'm an expert in these`}</h2>
        </div>
        <div className="skill grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 lg:gap-x-20 justify-between ">
          {skills.map((skill) => (
            <div key={skill.name}>
              <p className="bg-light py-[0.875rem] px-8 rounded-[6.25rem] text-center font-oval font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="circle-2 absolute  h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem]  -top-2 lg:-top-10   left-12 sm:left-44 md:left-48 lg:left-60 xl:left-[25rem] 2xl:left-[44rem]  rounded-full"></div>
    </section>
  );
};

export default Skills;
