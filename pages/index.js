import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Explore from "@/components/Explore";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      {/*  <Explore />
    <Contact/>
    <Footer /> */}
    </div>
  );
};

export default Home;
