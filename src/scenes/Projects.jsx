import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project1 = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href="https://github.com/Inferno9753/Game">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">1</p>
          <p className="mt-7">
            Simple game but fun to play. This game challenges you by testing your memory.
            This game was buit with <span className="text-sky-700 font-semibold">HTML</span>, <span className="text-red font-semibold">CSS</span> and <span className="text-yellow font-semibold">Javascript</span>.
          </p>
        </div>
        <img src={require('../assets/project-1.png')} alt="Project-1" />
      </a>
    </motion.div>
  );
};

const Project2 = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href="https://github.com/Inferno9753/Clothing-App">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">2</p>
          <p className="mt-7">
            Shop your clothes here. There are varieties of clothes with many categories. This application was built with <span className="text-sky-700 font-semibold">React Js</span>.
          </p>
        </div>
        <img src={require('../assets/project-2.png')} alt="Project-2" />
      </a>
    </motion.div>
  );
};

const Project3 = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href="https://github.com/Inferno9753/react-blog-frontend">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">3</p>
          <p className="mt-7">
            Read and create interesting blog posts.This application was built with <span className="text-sky-700 font-semibold">React Js</span>, <span className="text-red font-semibold">Node Js</span> and <span className="text-yellow font-semibold">MongoDB</span>.
          </p>
        </div>
        <img src={require('../assets/project-3.png')} alt="Project-3" />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-sky-700">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here, you'll find a curated selection of projects that showcase my skills, creativity, and passion for Web development. Each project represents a unique journey and a commitment to delivering excellence.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project1 />
          <Project2 />
          <Project3 />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;